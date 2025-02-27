import Conditions from '../../../../../resources/conditions.js';
import NetRegexes from '../../../../../resources/netregexes.js';
import Outputs from '../../../../../resources/outputs.js';
import { Responses } from '../../../../../resources/responses.js';
import ZoneId from '../../../../../resources/zone_id.js';

export default {
  zoneId: ZoneId.EdensPromiseLitany,
  timelineFile: 'e10n.txt',
  timelineTriggers: [
    {
      id: 'E10N Umbra Smash',
      regex: /Umbra Smash/,
      beforeSeconds: 5,
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
  ],
  triggers: [
    {
      id: 'E10N Deepshadow Nova',
      netRegex: NetRegexes.startsUsing({ source: 'Shadowkeeper', id: '56E5', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schattenkönig', id: '56E5', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Roi De L\'Ombre', id: '56E5', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '影の王', id: '56E5', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'E10N Forward Implosion',
      netRegex: NetRegexes.startsUsing({ source: 'Shadowkeeper', id: '56B4', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schattenkönig', id: '56B4', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Roi De L\'Ombre', id: '56B4', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '影の王', id: '56B4', capture: false }),
      response: Responses.getBehind(),
    },
    {
      id: 'E10N Backward Implosion',
      netRegex: NetRegexes.startsUsing({ source: 'Shadowkeeper', id: '56B7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schattenkönig', id: '56B7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Roi De L\'Ombre', id: '56B7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '影の王', id: '56B7', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: Outputs.goFront,
      },
    },
    {
      id: 'E10N Forward Shadow Implosion',
      netRegex: NetRegexes.startsUsing({ source: 'Shadowkeeper', id: '56B5', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schattenkönig', id: '56B5', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Roi De L\'Ombre', id: '56B5', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '影の王', id: '56B5', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Shadow Side',
          de: 'Schatten Seite',
          fr: 'Allez du côté de l\'ombre',
          ja: '影と同じ側へ',
          cn: '影子同侧',
          ko: '그림자 쪽으로',
        },
      },
    },
    {
      id: 'E10N Backward Shadow Implosion',
      netRegex: NetRegexes.startsUsing({ source: 'Shadowkeeper', id: '56B8', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schattenkönig', id: '56B8', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Roi De L\'Ombre', id: '56B8', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '影の王', id: '56B8', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Opposite Shadow',
          de: 'Gegenüber des Schattens',
          fr: 'Allez du côté opposé à l\'ombre',
          ja: '影の反対側へ',
          cn: '影子异侧',
          ko: '그림자 반대쪽으로',
        },
      },
    },
    {
      id: 'E10N Left Giga Slash',
      netRegex: NetRegexes.startsUsing({ id: '56B1', source: 'Shadowkeeper', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '56B1', source: 'Schattenkönig', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '56B1', source: 'Roi De L\'Ombre', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '56B1', source: '影の王', capture: false }),
      response: Responses.goRight(),
    },
    {
      id: 'E10N Right Giga Slash',
      netRegex: NetRegexes.startsUsing({ id: '56AE', source: 'Shadowkeeper', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '56AE', source: 'Schattenkönig', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '56AE', source: 'Roi De L\'Ombre', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '56AE', source: '影の王', capture: false }),
      response: Responses.goLeft(),
    },
    {
      id: 'E10N Left Right Shadow Slash',
      netRegex: NetRegexes.startsUsing({ id: ['56AF', '56B2'], source: 'Shadowkeeper' }),
      netRegexDe: NetRegexes.startsUsing({ id: ['56AF', '56B2'], source: 'Schattenkönig' }),
      netRegexFr: NetRegexes.startsUsing({ id: ['56AF', '56B2'], source: 'Roi De L\'Ombre' }),
      netRegexJa: NetRegexes.startsUsing({ id: ['56AF', '56B2'], source: '影の王' }),
      alertText: (data, matches, output) => matches.id === '56AF' ? output.left() : output.right(),
      outputStrings: {
        left: {
          en: 'Go Left of Shadows',
          de: 'Geh links vom Schatten',
          fr: 'Allez à gauche des ombres',
          ja: '影の左へ',
          cn: '影子左侧',
          ko: '그림자 왼쪽',
        },
        right: {
          en: 'Go Right of Shadows',
          de: 'Geh rechts vom Schatten',
          fr: 'Allez à droite des ombres',
          ja: '影の右へ',
          cn: '影子右侧',
          ko: '그림자 오른쪽',
        },
      },
    },
    {
      id: 'E10N Shadow\'s Edge',
      netRegex: NetRegexes.startsUsing({ source: 'Shadowkeeper', id: '5B0B' }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schattenkönig', id: '5B0B' }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Roi De L\'Ombre', id: '5B0B' }),
      netRegexJa: NetRegexes.startsUsing({ source: '影の王', id: '5B0B' }),
      response: Responses.tankCleave(),
    },
    {
      id: 'E10N Voidgate',
      netRegex: NetRegexes.startsUsing({ source: 'Shadowkeeper', id: '56DD', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schattenkönig', id: '56DD', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Roi De L\'Ombre', id: '56DD', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '影の王', id: '56DD', capture: false }),
      delaySeconds: 10, // It's 17 seconds from the time Voidgate starts casting until towers.
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get Puddles',
          de: 'Flächen nehmen',
          fr: 'Allez dans les zones au sol',
          ja: '踏む',
          cn: '踩圈',
          ko: '바닥 징 밟기',
        },
      },
    },
    {
      id: 'E10N Shadow Warrior',
      netRegex: NetRegexes.startsUsing({ source: 'Shadowkeeper', id: '56E2', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schattenkönig', id: '56E2', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Roi De L\'Ombre', id: '56E2', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '影の王', id: '56E2', capture: false }),
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Watch Tethered Dog',
          de: 'Achte auf den verbundenen Hund',
          fr: 'Regardez le chien lié',
          ja: '線で繋がった分身を注視',
          cn: '找连线的狗',
          ko: '연결된 쫄 지켜보기',
        },
      },
    },
    {
      id: 'E10N Cloak of Shadows ',
      netRegex: NetRegexes.startsUsing({ source: 'Shadowkeeper', id: '5B11', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schattenkönig', id: '5B11', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Roi De L\'Ombre', id: '5B11', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '影の王', id: '5B11', capture: false }),
      suppressSeconds: 5,
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          // TODO: this could be better if we knew where the shadow was
          en: 'Away From Black Lines',
          de: 'Weg von den schwarzen Linien',
          fr: 'Éloignez-vous des lignes noires',
          ja: '黒い線から離れる',
          cn: '远离黑线',
        },
      },
    },
    {
      // There is technically an AoE marker, but by the time it shows,
      // it's too late to get out if the player is inside the boss's hitbox.
      id: 'E10N Throne Of Shadow',
      netRegex: NetRegexes.startsUsing({ source: 'Shadowkeeper', id: '56C7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schattenkönig', id: '56C7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Roi De L\'Ombre', id: '56C7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '影の王', id: '56C7', capture: false }),
      response: Responses.getOut('alert'),
    },
    {
      // There is technically a visual, but it comes up at precisely the same time as puddles.
      // Best to make sure the user is reminded.
      id: 'E10N Distant Scream',
      netRegex: NetRegexes.startsUsing({ source: 'Shadowkeeper', id: '56C6', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Schattenkönig', id: '56C6', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Roi De L\'Ombre', id: '56C6', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '影の王', id: '56C6', capture: false }),
      response: Responses.knockback('alert'),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Shadowkeeper': 'Schattenkönig',
      },
      'replaceText': {
        'Backward Implosion': 'Hintere Implosion',
        'Backward Shadow Implosion': 'Hintere Schattenimplosion',
        'Barbs Of Agony': 'Stacheln der Todesqualen',
        'Cloak Of Shadows': 'Mantel des Schattens',
        'Deepshadow Nova': 'Dunkelschatten-Nova',
        'Distant Scream': 'Ferner Schrei',
        'Fade To Shadow': 'Schattenimmersion',
        'Forward Implosion': 'Vordere Implosion',
        'Forward Shadow Implosion': 'Vordere Schattenimplosion',
        'Front/Back Shadow Implosion': 'Vordere/Hintere Schattenimplosion',
        'Left': 'Linker',
        'Right Giga Slash': 'Rechter Giga-Schlag',
        'Right Shadow Slash': 'Rechter Schattenschlag',
        'Shadow Warrior': 'Schattenkrieger',
        'Shadow\'s Edge': 'Schattenhieb',
        'Shadowy Eruption': 'Schatteneruption',
        'Spawn Shadow': 'Schattenerscheinung',
        'Throne Of Shadow': 'Schattenthron',
        'Umbra Smash': 'Schattenschlag',
        'Void Pulse': 'Nichtspulsieren',
        'Voidgate': 'Nichtsportal',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Shadowkeeper': 'Ordre royal',
      },
      'replaceText': {
        'Backward Implosion': 'Implosion dorsale',
        'Backward Shadow Implosion': 'Implosion ombrale dorsale',
        'Barbs Of Agony': 'Entrailles de l\'agonie',
        'Cloak Of Shadows': 'Cape de l\'Ombre',
        'Deepshadow Nova': 'Nova de la pleine-ombre',
        'Distant Scream': 'Hurlement de l\'Ombre',
        'Fade To Shadow': 'Immersion abyssale',
        'Forward Implosion': 'Implosion frontale',
        'Forward Shadow Implosion': 'Implosion ombrale frontale',
        'Front/Back Shadow Implosion': 'Implosion ombrale devant/derrière',
        'Left/Right Giga Slash': 'Giga taillade gauche/droite',
        'Left/Right Shadow Slash': 'Giga taillade ombrale gauche/droite',
        'Shadow Warrior': 'Ombre du roi',
        'Shadow\'s Edge': 'Taillade ombrale',
        'Shadowy Eruption': 'Éruption ombrale',
        'Spawn Shadow': 'Ombres croissantes',
        'Throne Of Shadow': 'Trône de l\'Ombre',
        'Umbra Smash': 'Fracas ombral',
        'Void Pulse': 'Pulsation du néant',
        'Voidgate': 'Porte du néant',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Shadowkeeper': '影の王命',
      },
      'replaceText': {
        '(?<!/)Backward Implosion': 'バックワード・インプロージョン',
        'Backward Shadow Implosion': 'バックワード・シャドウインプロージョン',
        'Barbs Of Agony': 'バーブス・オブ・アゴニー',
        'Cloak Of Shadows': 'クローク・オブ・シャドウ',
        'Deepshadow Nova': 'ディープシャドウノヴァ',
        'Distant Scream': '影の遠吠え',
        'Fade To Shadow': '影潜り',
        'Forward Implosion': 'フォワード・インプロージョン',
        'Forward/Backward Implosion': 'フォワード／バックワード・インプロージョン',
        'Forward Shadow Implosion': 'フォワード・シャドウインプロージョン',
        'Front/Back Shadow Implosion': 'フォワード／バックワード・シャドウインプロージョン',
        'Left/Right Giga Slash': 'レフトサイド／ライトサイド・ギガスラッシュ',
        'Left/Right Shadow Slash': 'レフトサイド／ライトサイド・シャドウギガスラッシュ',
        'Shadow Warrior': '影武者',
        'Shadow\'s Edge': 'シャドウスラッシュ',
        'Shadowy Eruption': 'シャドウエラプション',
        'Spawn Shadow': 'スポーンシャドウ',
        'Throne Of Shadow': '影の王権',
        'Umbra Smash': 'アンブラスマッシュ',
        'Void Pulse': 'ヴォイドパルセーション',
        'Voidgate': 'ヴォイドゲート',
      },
    },
  ],
};
