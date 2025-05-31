import type { Schema, Struct } from '@strapi/strapi';

export interface ContentLayoutContentRow extends Struct.ComponentSchema {
  collectionName: 'components_content_layout_content_rows';
  info: {
    description: '';
    displayName: 'Content Row';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    totalWidgetsPerRowOnMobile: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    widgetWrapper: Schema.Attribute.Component<
      'content-layout.widget-wrapper',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
  };
}

export interface ContentLayoutWidgetWrapper extends Struct.ComponentSchema {
  collectionName: 'components_content_layout_widget_wrappers';
  info: {
    description: '';
    displayName: 'WidgetWrapper';
    icon: 'code';
  };
  attributes: {
    dynamicHeroWidget: Schema.Attribute.Component<
      'widgets.dynamic-hero',
      false
    >;
    isDisabledOnDesktop: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    isDisabledOnMobile: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    isDisabledOnTablet: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
    widgetType: Schema.Attribute.Enumeration<['hero']>;
  };
}

export interface CoreLink extends Struct.ComponentSchema {
  collectionName: 'components_core_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    shouldOpenInNewTab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String;
  };
}

export interface WidgetsDynamicHero extends Struct.ComponentSchema {
  collectionName: 'components_widgets_dynamic_heroes';
  info: {
    description: '';
    displayName: 'Dynamic Hero';
    icon: 'layout';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    link: Schema.Attribute.Component<'core.link', false>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-layout.content-row': ContentLayoutContentRow;
      'content-layout.widget-wrapper': ContentLayoutWidgetWrapper;
      'core.link': CoreLink;
      'widgets.dynamic-hero': WidgetsDynamicHero;
    }
  }
}
