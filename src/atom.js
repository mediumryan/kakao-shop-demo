import { atom, selector } from 'recoil';
// get item images
import rainMuji from './images/rain-muji.webp';
import rainRyan from './images/rain-ryan.webp';
import rainAppeach from './images/rain-appeach.webp';
import umbAppeach from './images/umb-appeach.webp';
import umbRyan1 from './images/umb-ryan-1.webp';
import umbRyan2 from './images/umb-ryan-2.webp';
import umbRyan3 from './images/umb-ryan-3.webp';
import noteRyan1 from './images/note-ryan-1.webp';
import noteRyan2 from './images/note-ryan-2.webp';
import noteRyan3 from './images/note-ryan-3.webp';
import noteRyan4 from './images/note-ryan-4.webp';
import noteRyan5 from './images/note-ryan-5.webp';
import pillowRyan from './images/pillow-ryan.webp';
import pillowChunsik from './images/pillow-chunsik.webp';
import pillowAppeach from './images/pillow-appeach.webp';
import pillowMuji from './images/pillow-muji.webp';

// shopping items
export const allItem = atom({
    key: 'all_item',
    default: [
        {
            id: 0,
            image_path: rainMuji,
            name: 'レイニーガーデン_シリコンチャーム_ムジ',
            description: 'ムジキャラクターデザインのシリコンチャームです。',
            quantity: 1,
            vote_average: 10,
            price: 1000,
            category: 'charm',
            category_jp: 'チャーム',
            checked: false,
        },
        {
            id: 1,
            image_path: rainRyan,
            name: 'レイニーガーデン_シリコンチャーム_ライアン',
            description: 'ライアンキャラクターデザインのシリコンチャームです。',
            quantity: 1,
            vote_average: 7.5,
            price: 1000,
            category: 'charm',
            category_jp: 'チャーム',
            checked: false,
        },
        {
            id: 2,
            image_path: rainAppeach,
            name: 'レイニーガーデン_シリコンチャーム_アピーチ',
            description: 'アピーチキャラクターデザインのシリコンチャームです。',
            quantity: 1,
            vote_average: 8,
            price: 1000,
            category: 'charm',
            category_jp: 'チャーム',
            checked: false,
        },
        {
            id: 3,
            image_path: umbAppeach,
            name: 'レイニーガーデンポーチ3段傘_アピーチ',
            description: 'アピーチデザインの3段折りたたみ傘です。',
            quantity: 1,
            vote_average: 4.5,
            price: 1400,
            category: 'umbrella',
            category_jp: '傘',
            checked: false,
        },
        {
            id: 4,
            image_path: umbRyan1,
            name: 'レイニーガーデンポーチ3段傘_ライアン',
            description: 'ライアンデザインの3段折りたたみ傘です。',
            quantity: 1,
            vote_average: 1,
            price: 1400,
            category: 'umbrella',
            category_jp: '傘',
            checked: false,
        },
        {
            id: 5,
            image_path: umbRyan2,
            name: 'レイニーガーデン透明傘グリーン_ライアン',
            description: 'ライアンデザインの透明傘（グリーン）です。',
            quantity: 1,
            vote_average: 3,
            price: 1400,
            category: 'umbrella',
            category_jp: '傘',
            checked: false,
        },
        {
            id: 6,
            image_path: umbRyan3,
            name: 'レイニーガーデン透明傘イエロー_ライアン',
            description: 'ライアンデザインの透明傘（イエロー）です。',
            quantity: 1,
            vote_average: 10,
            price: 1400,
            category: 'umbrella',
            category_jp: '傘',
            checked: false,
        },
        {
            id: 7,
            image_path: noteRyan1,
            name: 'フルーティインデックススプリングノートSリトライアン',
            description:
                'リトライアンデザインのスプリングノート（Sサイズ）です。',
            quantity: 1,
            vote_average: 9,
            price: 400,
            category: 'stationery',
            category_jp: '文具',
            checked: false,
        },
        {
            id: 8,
            image_path: noteRyan2,
            name: 'フルーティインデックススプリングノートLリトライアン',
            description:
                'リトライアンデザインのスプリングノート（Lサイズ）です。',
            quantity: 1,
            vote_average: 2,
            price: 850,
            category: 'stationery',
            category_jp: '文具',
            checked: false,
        },
        {
            id: 9,
            image_path: noteRyan3,
            name: 'フルーティ40Pクリアファイルリトライアン',
            description: 'リトライアンデザインのクリアファイルです。',
            quantity: 1,
            vote_average: 9,
            price: 600,
            category: 'stationery',
            category_jp: '文具',
            checked: false,
        },
        {
            id: 10,
            image_path: noteRyan4,
            name: '夢日記ミニノート_ライアン',
            description: 'ライアンデザインのミニノートです。',
            quantity: 1,
            vote_average: 10,
            price: 350,
            category: 'stationery',
            category_jp: '文具',
            checked: false,
        },
        {
            id: 11,
            image_path: noteRyan5,
            name: '夢日記スプリングノート',
            description: '夢日記スプリングノートです。',
            quantity: 1,
            vote_average: 6,
            price: 500,
            category: 'stationery',
            category_jp: '文具',
            checked: false,
        },
        {
            id: 12,
            image_path: pillowRyan,
            name: 'ボディピロー_ライアン',
            description: 'ライアンデザインのボディピローです。',
            quantity: 1,
            vote_average: 6.5,
            price: 3200,
            category: 'bedding',
            category_jp: '寝具',
            checked: false,
        },
        {
            id: 13,
            image_path: pillowChunsik,
            name: 'ボディピロー_チュンシク',
            description: 'チュンシクデザインのボディピローです。',
            quantity: 1,
            vote_average: 4.5,
            price: 3200,
            category: 'bedding',
            category_jp: '寝具',
            checked: false,
        },
        {
            id: 14,
            image_path: pillowAppeach,
            name: 'ボディピロー_アピーチ',
            description: 'アピーチデザインのボディピローです。',
            quantity: 1,
            vote_average: 10,
            price: 3200,
            category: 'bedding',
            category_jp: '寝具',
            checked: false,
        },
        {
            id: 15,
            image_path: pillowMuji,
            name: 'ボディピロー_ムジ',
            description: 'ムジデザインのボディピローです。',
            quantity: 1,
            vote_average: 10,
            price: 3200,
            category: 'bedding',
            category_jp: '寝具',
            checked: false,
        },
    ],
});

export const charmItem = selector({
    key: 'charm_item',
    get: ({ get }) => {
        const all = get(allItem);
        return all.filter((a) => a.category === 'charm');
    },
});

export const umbrellaItem = selector({
    key: 'umbrella',
    get: ({ get }) => {
        const all = get(allItem);
        return all.filter((a) => a.category === 'umbrella');
    },
});

export const stationeryItem = selector({
    key: 'stationery_item',
    get: ({ get }) => {
        const all = get(allItem);
        return all.filter((a) => a.category === 'stationery');
    },
});

export const beddingItem = selector({
    key: 'bedding_item',
    get: ({ get }) => {
        const all = get(allItem);
        return all.filter((a) => a.category === 'bedding');
    },
});

// cart item
export const cartState = atom({
    key: 'cart_items',
    default: [],
});

// nav menu toggle state

export const navMenuState = atom({
    key: 'nav_menu_state',
    default: false,
});
