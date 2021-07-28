import React from 'react';



export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper jrhtw9ph4a-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo krfpdzr124-editor_css',
    children:''  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav~krfpdk0sxh7',
        to: '/login',
        children: 'LOGIN',
        className: 'menu-item krfvdq2b5oe-editor_css',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  Menu: {
    children: [
      {
        name: 'Banner3_0',
        to: 'Banner3_0',
        children: '首页',
        className: 'active menu-item',
      },
      {
        name: 'Content8_0',
        to: 'Content8_0',
        children: '特邀嘉宾',
        className: 'menu-item',
      },
      {
        name: 'Content9_0',
        to: 'Content9_0',
        children: '会议日程',
        className: 'menu-item',
      },
      {
        name: 'Content10_0',
        to: 'Content10_0',
        children: '大会地址',
        className: 'menu-item',
      },
      {
        name: 'Content11_0',
        to: 'Content11_0',
        children: '展台展示',
        className: 'menu-item',
      },
      {
        name: 'Content12_0',
        to: 'Content12_0',
        children: '特别鸣谢',
        className: 'menu-item',
      },
    ],
  },
};

export const Banner30DataSource = {
  wrapper: { className: 'banner3 krfp0tng6pf-editor_css' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan krfp01x7jog-editor_css',
        children: 'Welcome to RTC Web Application',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name krfvf6qiqfg-editor_css',
        children: (
          <span>
            <p>
              A real-time chat and video call application<br />
            </p>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner3-button krfp98e6g8q-editor_css',
        to: "/login",
        children: (
          <span >
            <p >GET STARTED</p>
          </span>
        ),
      },
    ],
  },
};
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      { name: 'image', children: '', className: 'copyright-logo' },
      {
        name: 'group',
        children: (
          <span>
            <br />
          </span>
        ),
        className: 'copyright-group',
      },
      {
        name: 'image2',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg',
        className: 'copyright-line',
      },
      {
        name: 'copyright',
        children: (
          <span>
            <span>
              <p>
                Copyright © Jaymin Do&nbsp; 2021<br />
              </p>
            </span>
          </span>
        ),
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'weibo',
        href: '#',
        className: 'links-weibo krfvtvg5ncp-editor_css',
        children: 'https://image.flaticon.com/icons/png/512/124/124010.png',
      },
      {
        name: 'zhihu',
        href: '#',
        className: 'links-zhihu krfvu2itai-editor_css',
        children:
          'data:image/png;base64,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',
      },
    ],
  },
};
