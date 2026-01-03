export const enum MenuItemType {
  unknown,
  view,
  externalLink
}

export interface IMenuConfigItem {
  key: string;
  version: { min: number; max: number };
  position: number;
  itemType: MenuItemType;
  href?: '';
}

export interface IMenuConfig {
  menuItems: IMenuConfigItem[];
}

/* sample json:
{
  "menu-items": [
    { "key": "view-user-account", "position": 0, "itemType": 1 },
    { "key": "view-patient-dashboard", "position": 1, "itemType": 1 },
    { "key": "external-link", "position": 2, "itemType": 2, "value": "https://www.google.com" }
  ],
  "views": [
    ...
  ]
}
*/
