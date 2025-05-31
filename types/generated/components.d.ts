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

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
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
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'widgets.dynamic-hero': WidgetsDynamicHero;
    }
  }
}
