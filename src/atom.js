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
            quantity: 1,
            price: 1000,
            category: 'doll',
            checked: false,
        },
        {
            id: 1,
            image_path: rainRyan,
            name: 'レイニーガーデン_シリコンチャーム_ライアン',
            quantity: 1,
            price: 1000,
            category: 'doll',
            checked: false,
        },
        {
            id: 2,
            image_path: rainAppeach,
            name: 'レイニーガーデン_シリコンチャーム_アピーチ',
            quantity: 1,
            price: 1000,
            category: 'doll',
            checked: false,
        },
        {
            id: 3,
            image_path: umbAppeach,
            name: 'レイニーガーデンポーチ3段傘_アピーチ',
            quantity: 1,
            price: 1400,
            category: 'umbrella',
            checked: false,
        },
        {
            id: 4,
            image_path: umbRyan1,
            name: 'レイニーガーデンポーチ3段傘_ライアン',
            quantity: 1,
            price: 1400,
            category: 'umbrella',
            checked: false,
        },
        {
            id: 5,
            image_path: umbRyan2,
            name: 'レイニーガーデン透明傘グリーン_ライアン',
            quantity: 1,
            price: 1400,
            category: 'umbrella',
            checked: false,
        },
        {
            id: 6,
            image_path: umbRyan3,
            name: 'レイニーガーデン透明傘イエロー_ライアン',
            quantity: 1,
            price: 1400,
            category: 'umbrella',
            checked: false,
        },
        {
            id: 7,
            image_path: noteRyan1,
            name: 'フルーティインデックススプリングノートSリトライアン',
            quantity: 1,
            price: 400,
            category: 'stationery',
            checked: false,
        },
        {
            id: 8,
            image_path: noteRyan2,
            name: 'フルーティインデックススプリングノートLリトライアン',
            quantity: 1,
            price: 850,
            category: 'stationery',
            checked: false,
        },
        {
            id: 9,
            image_path: noteRyan3,
            name: 'フルーティ40Pクリアファイルリトライアン',
            quantity: 1,
            price: 600,
            category: 'stationery',
            checked: false,
        },
        {
            id: 10,
            image_path: noteRyan4,
            name: '夢日記ミニノート_ライアン',
            quantity: 1,
            price: 350,
            category: 'stationery',
            checked: false,
        },
        {
            id: 11,
            image_path: noteRyan5,
            name: '夢日記スプリングノート',
            quantity: 1,
            price: 500,
            category: 'stationery',
            checked: false,
        },
        {
            id: 12,
            image_path: pillowRyan,
            name: 'ボディピロー_ライアン',
            quantity: 1,
            price: 3200,
            category: 'bedding',
            checked: false,
        },
        {
            id: 13,
            image_path: pillowChunsik,
            name: 'ボディピロー_チュンシク',
            quantity: 1,
            price: 3200,
            category: 'bedding',
            checked: false,
        },
        {
            id: 14,
            image_path: pillowAppeach,
            name: 'ボディピロー_アピーチ',
            quantity: 1,
            price: 3200,
            category: 'bedding',
            checked: false,
        },
        {
            id: 15,
            image_path: pillowMuji,
            name: 'ボディピロー_ムジ',
            quantity: 1,
            price: 3200,
            category: 'bedding',
            checked: false,
        },
    ],
});

export const dollItem = selector({
    key: 'doll_item',
    get: ({ get }) => {
        const all = get(allItem);
        return all.filter((a) => a.category === 'doll');
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
