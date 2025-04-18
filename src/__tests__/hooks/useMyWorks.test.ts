import { useMyWorks, MyWork } from '../../../src/hooks/useMyWorks';

describe('useMyWorks', () => {
  it('should return an array of works', () => {
    const { works } = useMyWorks();
    
    // Check if works is an array
    expect(Array.isArray(works)).toBe(true);
    
    // Check if works array is not empty
    expect(works.length).toBeGreaterThan(0);
    
    // Check if each work has the required properties
    works.forEach((work: MyWork) => {
      expect(work).toHaveProperty('name');
      expect(work).toHaveProperty('description');
      expect(work).toHaveProperty('images');
      expect(work).toHaveProperty('links');
      
      // Check if images is an array
      expect(Array.isArray(work.images)).toBe(true);
      
      // Check if links is an array
      expect(Array.isArray(work.links)).toBe(true);
      
      // Check if each link has the required properties
      work.links.forEach(link => {
        expect(link).toHaveProperty('url');
        expect(link).toHaveProperty('title');
        expect(link).toHaveProperty('image');
      });
    });
  });
  
  it('should contain specific projects', () => {
    const { works } = useMyWorks();
    
    // Check for specific projects by name
    const projectNames = works.map(work => work.name);
    
    expect(projectNames).toContain('Turkmen Sites Search');
    expect(projectNames).toContain('Kotlin Playground Telegram Bot');
    expect(projectNames).toContain('Wakant');
  });
  
  it('should have valid URLs in links', () => {
    const { works } = useMyWorks();
    
    works.forEach(work => {
      work.links.forEach(link => {
        // Check if URL is a string
        expect(typeof link.url).toBe('string');
        
        // Check if URL is not empty
        expect(link.url.length).toBeGreaterThan(0);
        
        // Simple URL validation (starts with http:// or https://)
        const isValidUrl = link.url.startsWith('http://') || link.url.startsWith('https://');
        expect(isValidUrl || link.url.startsWith('/') || link.url.startsWith('t.me')).toBe(true);
      });
    });
  });
});