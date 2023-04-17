import { Card as NCard, Divider, TabsProps } from 'antd';
import { CardTabListType } from 'antd/lib/card';
import React from 'react';

import styles from './Card.module.scss';

export declare interface CardProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNodeArray;

  title?: React.ReactNode;
  extra?: React.ReactNode;
  bordered?: boolean;
  headStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  loading?: boolean;
  hoverable?: boolean;
  id?: string;
  className?: string;
  size?: any;
  type?: any;
  cover?: React.ReactNode;
  actions?: React.ReactNode[];
  tabList?: CardTabListType[];
  tabBarExtraContent?: React.ReactNode;
  onTabChange?: (key: string) => void;
  activeTabKey?: string;
  defaultActiveTabKey?: string;
  meta?: any;
  tabProps?: TabsProps;
  noShadow?: boolean;
}


export default function Card(props: CardProps): JSX.Element {
  const { children, style, onTabChange, meta, noShadow = false } = props;

  const handleTabChange = (key: string) => {
    if (!onTabChange) return;
    onTabChange(key);
  };

  return (
    <>
      <NCard {...props} style={{ ...style }} onTabChange={handleTabChange} className={styles[noShadow ? 'no-shadow' : 'card']}>
        {meta}
        {meta ? <Divider></Divider> : null}

        {children}
      </NCard>
    </>
  );
}