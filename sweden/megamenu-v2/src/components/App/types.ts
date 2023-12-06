import appData from "@sitevision/api/server/appData";

export type LinkType = "Megamenu" | "Dropdown" | "Link";

export interface AppProperties {
  data: {
    desktopLogo: string;
    mobileLogo: string;
    loginBtnText: string;
    loginBtnLink: string;
    ctaBtnText: string;
    ctaLink: string;
  };
}

export interface ILink {
  id: string;
  type: "sv:folder" | "sv:link";
  name: string;
  path: string;
  properties: Properties;
}

export interface Properties {
  nofollow?: boolean;
  publishedBy: string;
  displayName: string;
  publishDate: number;
  ggLinkType: LinkType;
  "jcr:uuid": string;
  locale: string;
  URI: string;
  URL: string;
  lastPublishDate: number;
  visibleInMenus: boolean;
  useCustomWindowSize?: boolean;
  useDownload?: boolean;
  usePathName: boolean;
  comments: any[];
  lastModifiedDate: number;
  lastModifiedBy: string;
  customWindowHeight?: number;
  published: boolean;
  lastPublishedBy: string;
  creationDate: number;
  visibleCount: number;
  rawURI?: string;
  createdBy: string;
  "jcr:mixinTypes": string[];
  customWindowWidth?: number;
  linkType?: string;
  "jcr:primaryType": string;
  openInNewWindow?: boolean;
  ggParentChildId: string;
  robotsIndex?: boolean;
  resourcePriority?: number;
  downloadProtected?: boolean;
}

export type DropdownMenu = {
  type: "Dropdown";
  items: ILink[];
};

export type MegaMenuMenu = {
  type: "Megamenu";
  columns: Array<ILink[]>;
};

export interface ISubMenuItems {
  [key: string]: DropdownMenu | MegaMenuMenu;
}
