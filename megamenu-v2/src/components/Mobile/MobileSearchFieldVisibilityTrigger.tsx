import React from "react";

interface MobileTriggerProps {
  toggleMenu: () => void;
}

const MobileSearchFormVisibilityTrigger: React.FC<MobileTriggerProps> = ({
  toggleMenu,
}) => {
  return (
    <div
      data-w-id="348d40d7-fd14-b770-e6cd-1573ef073efe"
      className="mobile_search-form-open"
    >
      <div className="icon-embed-custom-2 w-embed">
        <svg
          width={18}
          height={19}
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleMenu}
        >
          <path
            d="M14.2049 13.6561L18 17.4503L16.7462 18.7041L12.952 14.909C11.5402 16.0407 9.78419 16.6563 7.9748 16.6537C3.57271 16.6537 0 13.081 0 8.6789C0 4.27681 3.57271 0.704102 7.9748 0.704102C12.3769 0.704102 15.9496 4.27681 15.9496 8.6789C15.9522 10.4883 15.3366 12.2443 14.2049 13.6561ZM12.4274 12.9986C13.5519 11.8421 14.18 10.292 14.1774 8.6789C14.1774 5.25239 11.4013 2.47628 7.9748 2.47628C4.54829 2.47628 1.77218 5.25239 1.77218 8.6789C1.77218 12.1054 4.54829 14.8815 7.9748 14.8815C9.58786 14.8841 11.138 14.256 12.2945 13.1315L12.4274 12.9986Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default MobileSearchFormVisibilityTrigger;
