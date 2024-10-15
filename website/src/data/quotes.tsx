/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export const QUOTES = [
  {
    thumbnail: require('./quotes/marketstack.png'),
    name: '专心致志',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: '',
      description: '',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
 古时候有个围棋高手，名叫秋，人们称他弈秋。他有两个徒弟，其中一个专心好学，棋艺提高很快；另一个虽然也天天听课，但很不专心。他看着老师，心里却想着天上有没有大雁飞来，老师的话一句也没听进去，棋艺自然也没有丝毫提高。
      </Translate>
    ),
    url: 'https://www.543x.com/',
  },
  {
    thumbnail: require('./quotes/positionstack.png'),
    name: '哄堂大笑',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: '',
      description: '',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
宋朝时候，有个叫冯相的官员。有一天，他穿着一双新靴子走进办公的衙门。一个同僚问他：“您买这双新靴子花了多少钱？”他抬起一只脚说：“九百。”那个同僚惊奇地说：“怎么我这双靴子花了一千八百呢？”冯相又抬起另一只脚说：“这只也是九百。”满屋的人都大笑起来。
      </Translate>
    ),
    url: 'https://www.252x.com/',
  },
  {
    thumbnail: require('./quotes/tax_data.png'),
    name: '画龙点睛',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: '',
      description: 'Tax Data API',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
南北朝有个画家叫张僧繇。传说他在一所佛寺的墙壁上画了四条龙，都没画眼睛。大家问他：“为什么？”他回答：“有了眼睛，龙会飞走的。”人们以为他说大话。他只好为两条龙画上眼睛。立时雷电破壁，两条龙腾空而去，墙上只剩下没有眼睛的两条龙。
      </Translate>
    ),
    url: 'https://www.494x.com',
  },
];

export default QUOTES;
