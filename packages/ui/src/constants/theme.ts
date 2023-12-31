import { ThemeConfig } from 'antd';

import themeColor from '../index.scss';

export const DARK_GLOBAL_THEME_COLOR = {
  $background_color: '#16171C',
  $primary_color: '#16171C',
  $dark_secondary_color: '#22232a',
  $secondary_color: '#36393f',
  $text_color: 'white',
  $dark_text_color: 'gray',
  $highlight_color: '#0A96FF',
  $error_color: '#E5534B',
  $error_text_color: '#E5534B',
  $love_color: '#fa7970',
};

export const GLOBAL_THEME_COLOR = {
  $background_color: themeColor.background_color,
  $primary_color: themeColor.primary_color,
  $dark_secondary_color: themeColor.dark_secondary_color,
  $secondary_color: themeColor.secondary_color,
  $text_color: themeColor.text_color,
  $dark_text_color: themeColor.dark_text_color,
  $text_color_contrast: themeColor.text_color_contrast,
  $highlight_color: themeColor.highlight_color,
  $dark_highlight_color: themeColor.dark_highlight_color,
  $error_color: themeColor.error_color,
  $error_text_color: themeColor.error_text_color,
  $border_color: themeColor.color_border,
  $success_color: themeColor.success_color,
  $light_highlight_color: themeColor.light_highlight_color,
  $glassy_background_color: themeColor.glassy_background_color,
  $in_progress_color: themeColor.in_progress_color,
  $love_color: '#fa7970',
};

export const ANT_DESIGN_THEME: ThemeConfig = {
  token: {
    colorPrimary: GLOBAL_THEME_COLOR.$highlight_color,
    colorBgContainer: GLOBAL_THEME_COLOR.$background_color,
    colorBgElevated: GLOBAL_THEME_COLOR.$primary_color,
    colorText: GLOBAL_THEME_COLOR.$text_color,
    colorBorderSecondary: GLOBAL_THEME_COLOR.$primary_color,
    colorPrimaryTextHover: GLOBAL_THEME_COLOR.$highlight_color,
    colorBorder: GLOBAL_THEME_COLOR.$border_color,
    colorErrorBg: GLOBAL_THEME_COLOR.$error_color,
    colorErrorBorder: GLOBAL_THEME_COLOR.$error_color,
    colorBgLayout: GLOBAL_THEME_COLOR.$background_color,
  },
};
