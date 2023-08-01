import { Button } from "../../forms/Button";

const TabLinks = ({
  tabLinkObject = [],
  activeBtn = "",
  tabLinksClickHandler = () => {},
}) => {
  return (
    <div className="flex mt-2 mb-2">
      {tabLinkObject.map((tab) => (
        <Button
          key={tab.value}
          state={tab.value === activeBtn ? "active" : "inActive"}
          icon={tab.tabIcon}
          text={tab.text}
          onClick={() => tabLinksClickHandler(tab.value)}
        />
      ))}
    </div>
  );
};

export default TabLinks;
