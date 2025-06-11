import type { Schema, Struct } from '@strapi/strapi';

export interface ContentLayoutBackgroundCover extends Struct.ComponentSchema {
  collectionName: 'components_content_layout_background_covers';
  info: {
    displayName: 'Background Cover';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Component<
      'core.image-per-breakpoint',
      false
    >;
  };
}

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

export interface CoreExternalLink extends Struct.ComponentSchema {
  collectionName: 'components_core_external_links';
  info: {
    displayName: 'External Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    shouldOpenInNewTab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    url: Schema.Attribute.String;
  };
}

export interface CoreImagePerBreakpoint extends Struct.ComponentSchema {
  collectionName: 'components_core_image_per_breakpoints';
  info: {
    description: '';
    displayName: 'Image Per Breakpoint';
    icon: 'picture';
  };
  attributes: {
    desktopImage: Schema.Attribute.Media<'images' | 'files'>;
    imageAlt: Schema.Attribute.String;
    mobileImage: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    tabletImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface CoreInternalLink extends Struct.ComponentSchema {
  collectionName: 'components_core_internal_links';
  info: {
    displayName: 'Internal Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    shouldOpenInNewTab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
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
    externalLink: Schema.Attribute.Component<'core.external-link', false>;
    internalLink: Schema.Attribute.Component<'core.internal-link', false>;
  };
}

export interface SingleTypesLinks extends Struct.ComponentSchema {
  collectionName: 'components_single_types_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    link: Schema.Attribute.Component<'core.link', true>;
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
    images: Schema.Attribute.Component<'core.image-per-breakpoint', false>;
    link: Schema.Attribute.Component<'core.link', false>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-layout.background-cover': ContentLayoutBackgroundCover;
      'content-layout.content-row': ContentLayoutContentRow;
      'content-layout.widget-wrapper': ContentLayoutWidgetWrapper;
      'core.external-link': CoreExternalLink;
      'core.image-per-breakpoint': CoreImagePerBreakpoint;
      'core.internal-link': CoreInternalLink;
      'core.link': CoreLink;
      'single-types.links': SingleTypesLinks;
      'widgets.dynamic-hero': WidgetsDynamicHero;
    }
  }
}
