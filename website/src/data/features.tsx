/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
  url: string;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: '新华字典数据库',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ipstack.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
新华字典数据库集成了海量的中文语言资源，包括成语、汉字、词语及歇后语，是语言学习和文化研究的宝贵资料库
      </Translate>
    ),
    url: 'https://www.96oo.com',
  },
  {
    title: translate({
      message: '深入探索成语库',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/zenserp.svg',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
成语库收录超过31648条成语，每条成语均包含其来源、解释、示例及拼音，帮助用户深刻理解成语背后的文化内涵
      </Translate>
    ),
    url: 'https://www.82oo.com',
  },
  {
    title: translate({
      message: '词语大全',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/fixer.svg',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
词语大全汇聚了264434个词语，覆盖广泛，从日常用语到专业术语，展现了汉语的博大精深与多样性。
      </Translate>
    ),
    url: 'https://www.81oo.com',
  },
  {
    title: translate({
      message: '汉字世界的奥秘',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/aviationstack.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
汉字世界包含了16142个汉字的详细信息，如笔画数、拼音、部首及多重释义，是学习汉字不可多得的资源。
      </Translate>
    ),
    url: 'https://www.474x.com',
  },
  {
    title: translate({
      message: '歇后语集',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/number_verification.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
歇后语集收集了14032条歇后语，这些充满智慧与幽默的短语，不仅是语言艺术的体现，也反映了中华文化的独特魅力。
      </Translate>
    ),
    url: 'https://www.64ii.com',
  },
];

export default FEATURES;
