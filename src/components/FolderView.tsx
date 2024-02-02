import { DiAndroid, DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import { FaList, FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import TreeView, { flattenTree } from "react-accessible-treeview";
import "./folder.css";

const folder = {
  name: "",
  children: [
    {
      name: "src",
      children: [{ name: "index.kt" }, { name: "styles.css" }],
    },
    {
      name: "node_modules",
      children: [
        {
          name: "react-accessible-treeview",
          children: [{ name: "index.js" }],
        },
        { name: "react", children: [{ name: "index.js" }] },
      ],
    },
  ],
};

const data = flattenTree(folder);

function DirectoryTreeView() {
  return (
    <div>
      <div className="directory">
        <TreeView
          data={data}
          aria-label="directory tree"
          onSelect={(props) => console.log("onSelect callback: ", props)}
          onNodeSelect={(props) =>
            console.log("onNodeSelect callback: ", props)
          }
          nodeRenderer={({
            element,
            isBranch,
            isExpanded,
            getNodeProps,
            level,
          }) => (
            <div {...getNodeProps()} style={{ paddingLeft: 20 * (level - 1) }}>
              {isBranch ? (
                <FolderIcon isOpen={isExpanded} />
              ) : (
                <FileIcon filename={element.name} />
              )}

              {element.name}
            </div>
          )}
        />
      </div>
    </div>
  );
}

const FolderIcon = (props: { isOpen: boolean }) =>
  props.isOpen ? (
    <FaRegFolderOpen color="e8a87c" className="icon" />
  ) : (
    <FaRegFolder color="e8a87c" className="icon" />
  );

const FileIcon = (props: { filename: string }) => {
  const extension = props.filename.slice(props.filename.lastIndexOf(".") + 1);
  switch (extension) {
    case "js":
      return <DiJavascript color="yellow" className="icon" />;
    case "kt":
      return <DiAndroid color="yellow" className="icon" />;
    case "css":
      return <DiCss3 color="turquoise" className="icon" />;
    case "json":
      return <FaList color="yellow" className="icon" />;
    case "npmignore":
      return <DiNpm color="red" className="icon" />;
    default:
      return null;
  }
};

export default DirectoryTreeView;
