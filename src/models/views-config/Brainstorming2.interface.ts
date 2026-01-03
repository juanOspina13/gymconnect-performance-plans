// names and code in here are temporary, just brainstorming

// begin: only for JSON mapping
export interface IViewItemConfig {
  key: string;
}

export interface IViewsConfig {
  views: IViewItemConfig[];
}
// end: only for JSON mapping

export type IConfigurableViewBase = IViewItemConfig;

export interface IAccountViewComponent extends IConfigurableViewBase {
  position: number;
  version: { min: number; max: number };
}

export interface IAccountView extends IConfigurableViewBase {
  key: string;
  options: any;
  componentsLeft: IAccountViewComponent[];
  componentsMain: IAccountViewComponent[];
  componentsRight: IAccountViewComponent[];
}

export interface IMessagingView extends IConfigurableViewBase {
  key: string;
  options: any;
  componentsMain: IAccountViewComponent[];
}

/*
 IAccountView example:


*/

export interface IPatientDashboardDemographicsBar {
  version: { min: number; max: number };
  items: { key: string; position: number; version: { min: number; max: number } }[];
}

export interface IPatientDashboardTabs {
  version: { min: number; max: number };
  items: { key: string; position: number; version: { min: number; max: number } }[];
  // not sure if we'll drive email button or other things from here
}

export interface IPatientDashboardCardsSection {
  version: { min: number; max: number };
  items: { key: string; position: number; version: { min: number; max: number } }[];
}

export interface IPatientDashboardComponent {
  key: string;
  position: number;
  version: { min: number; max: number };
}

export interface IPatientDashboardTabView extends IConfigurableViewBase {
  key: string;
  version: { min: number; max: number };
  actionBar: {
    // TODO
  };
  cardsSection: IPatientDashboardCardsSection;
  componentsLeft: IPatientDashboardComponent[];
  componentsMain: IPatientDashboardComponent[];
  componentsRight: IPatientDashboardComponent[];
}

export interface IPatientDashboardView extends IConfigurableViewBase {
  key: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  options: Object; // TODO need interface
  demographicsBar: IPatientDashboardDemographicsBar;
  tabs: IPatientDashboardTabs;
  tabViews: IPatientDashboardTabView[];
}

/*
  example of IPatientDashboardView

  
*/
