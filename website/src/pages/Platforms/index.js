/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ThemeImage from '../components/ThemeImage';

import FoxFact from './FoxFact';
import styles from './styles.module.css';

function Platforms() {
  return (
    <Section>
      <div className={styles.foxFactContainer}>
        <FoxFact className={styles.fox} />
        <p>
          <strong>歇后语</strong>{' '}
          逻辑推理式的歇后语，如“猪八戒照镜子——里外不是人”，通过生动形象的比喻，揭示出深刻的道理或社会现象。而“哑巴吃黄莲——有苦自己知”，则巧妙地利用人物的特性，表达了一种难以言说的苦楚。
比拟/类比式的歇后语，“水仙不开花——装蒜”，鞋帮做帽沿——高升。丈姆娘看女婿——越看越欢喜；谐音歇后语“打破沙锅——问(璺)到底”，棺材头画花——死要好看。托老鼠管蚕——信错了人。无药大炮——中看勿中用。狮子大开口——贪大贪多。
老虎舔蝴蝶——不过瘾。小鸡肚肠——肚量小。贼出关门——防范已晚。老虎头上搔痒——自招祸。黄牛钻狗洞——勿量身价。泥菩萨过河——自身难保。
        </p>
      </div>
    </Section>
  );
}

export default Platforms;
