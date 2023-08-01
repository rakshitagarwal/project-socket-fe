import { RWebShare } from "react-web-share";
import { Button } from "./ui/Button";
import { cn } from "@/utils/cn";
import share from "@/assets/icons/share.svg";

export const MultiButton = ({
  className,
  onClick = () => {},
  buttonText,
  title,
  id,
}) => {
  return (
    <div
      className={cn(
        "flex justify-center gap-2 px-5 bg-white rounded-b-md pb-4",
        className
      )}
    >
      <RWebShare
        data={{
          text: `Project - ${title}`,
          url: `${window?.location}/${id}`,
          title: "Share this project",
        }}
      >
        <Button type="button" variant="outline" size="icon" className="h-9">
          <img src={share} alt="share icon"   />
        </Button>
      </RWebShare>
      <Button
        variant="outline"
        size="md"
        onClick={onClick}
        className="h-9 text-md max-desktop:text-sm"
      >
        {buttonText}
      </Button>
    </div>
  );
};
