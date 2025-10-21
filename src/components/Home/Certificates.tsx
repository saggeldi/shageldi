import { useState } from 'react';
import { Modal } from 'antd';
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

interface Certificate {
  id: string;
  title: string;
  description: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'GDG DevFest Ashgabat 2021 - Speaker Appreciation',
    description: 'Certificate of appreciation for contributing as a Speaker in "What\'s New in Android 12" session of DevFest Ashgabat in collaboration with Google Developers Group Ashgabat.',
    image: '/certificates/Screenshot 2025-10-21 at 01.09.53.png'
  },
  {
    id: '2',
    title: 'Turkmenaragatnashyk Agency - Diploma II Degree',
    description: 'Second degree diploma from Turkmenaragatnashyk Agency for telecommunications innovation projects and achievements in the field.',
    image: '/certificates/Screenshot 2025-10-21 at 01.10.21.png'
  },
  {
    id: '3',
    title: 'Turkmenaragatnashyk Agency - Diploma III Degree',
    description: 'Third degree diploma from Turkmenaragatnashyk Agency for contributions to telecommunications and innovation projects.',
    image: '/certificates/Screenshot 2025-10-21 at 01.10.44.png'
  },
  {
    id: '4',
    title: 'Turkmenaragatnashyk Agency - Innovation Diploma',
    description: 'Recognition diploma from Turkmenaragatnashyk Agency for innovation contributions in telecommunications and technology development.',
    image: '/certificates/Screenshot 2025-10-21 at 01.11.03.png'
  },
  {
    id: '5',
    title: 'UNDP & GDG Ashgabat - Digital Goal Learning Office',
    description: 'Certificate of appreciation from United Nations Development Programme (UNDP) in collaboration with Google Developers Group (GDG) for Digital Goal Learning Office participation.',
    image: '/certificates/Screenshot 2025-10-21 at 01.11.30.png'
  },
  {
    id: '6',
    title: 'USAID Startup Ecosystem Program 2021',
    description: 'Certificate of completion for successfully completing the Startup Ecosystem Program organized by USAID, focusing on entrepreneurship and startup development.',
    image: '/certificates/Screenshot 2025-10-21 at 01.11.53.png'
  },
  {
    id: '7',
    title: 'GeekSpace Startuper 2020 Program',
    description: 'Certificate of appreciation for outstanding work in GeekSpace "Startuper 2020" program under SEC (Startup Ecosystem Community) initiatives.',
    image: '/certificates/Screenshot 2025-10-21 at 01.12.14.png'
  },
  {
    id: '8',
    title: 'Google I/O Extended Ashgabat 2025 - Speaker',
    description: 'Certificate of appreciation for contributing as a Speaker in the "Android Evolution Unleashed: From AI-Powered Android 16 to Cross-Platform Mastery with Kotlin Multiplatforms" session at Google I/O Extended Ashgabat on September 20, 2025.',
    image: '/certificates/Screenshot 2025-10-21 at 01.12.55.png'
  },
  {
    id: '9',
    title: 'Google I/O Extended Speaker Badge 2025',
    description: 'Official Speaker badge for Google I/O Extended Ashgabat event, recognizing contribution to the Android and Kotlin development community.',
    image: '/certificates/Screenshot 2025-10-21 at 01.13.14.png'
  }
];

const Certificates = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const theme = useSelector((state: RootState) => state.theme);
  const isDark = theme.value === "dark";

  const showModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedCertificate(null);
  };

  return (
    <div style={{ 
      padding: '60px 20px', 
      backgroundColor: isDark ? '#1a1a1a' : '#f8f9fa' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          marginBottom: '50px',
          color: isDark ? 'white' : '#2c3e50'
        }}>
          Certificates & Achievements
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              style={{
                backgroundColor: isDark ? '#2a2a2a' : 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: isDark 
                  ? '0 4px 6px rgba(0, 0, 0, 0.3)' 
                  : '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                border: isDark ? '1px solid #444' : 'none'
              }}
              onClick={() => showModal(certificate)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = isDark 
                  ? '0 8px 25px rgba(0, 0, 0, 0.4)' 
                  : '0 8px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = isDark 
                  ? '0 4px 6px rgba(0, 0, 0, 0.3)' 
                  : '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ 
                height: '250px', 
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isDark ? '#333' : '#f8f9fa'
              }}>
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: isDark ? 'white' : '#2c3e50',
                  lineHeight: '1.4'
                }}>
                  {certificate.title}
                </h3>
                
                <p style={{
                  color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#666',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {certificate.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        title={null}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="90vw"
        style={{ top: 20 }}
        bodyStyle={{ 
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {selectedCertificate && (
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              style={{
                width: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                marginBottom: '20px'
              }}
            />
            <div style={{ padding: '0 20px 20px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '12px',
                color: isDark ? 'white' : '#2c3e50'
              }}>
                {selectedCertificate.title}
              </h3>
              <p style={{
                color: isDark ? 'rgba(255, 255, 255, 0.8)' : '#666',
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}>
                {selectedCertificate.description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Certificates;