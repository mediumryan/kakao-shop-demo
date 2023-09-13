import { atom } from 'recoil';
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
export const all = atom({
    key: 'all_item',
    default: [
        {
            id: 0,
            image_path: rainMuji,
            name: '레이니가든_실리콘 참_무지',
            quantity: 1,
            price: 10000,
            category: 'doll',
            checked: false,
        },
        {
            id: 1,
            image_path: rainRyan,
            name: '레이니가든_실리콘 참_라이언',
            quantity: 1,
            price: 10000,
            category: 'doll',
            checked: false,
        },
        {
            id: 2,
            image_path: rainAppeach,
            name: '레이니가든_실리콘 참_어피치',
            quantity: 1,
            price: 10000,
            category: 'doll',
            checked: false,
        },
        {
            id: 3,
            image_path: umbAppeach,
            name: '레이니가든 파우치 3단우산_어피치',
            quantity: 1,
            price: 14000,
            category: 'umbrella',
            checked: false,
        },
        {
            id: 4,
            image_path: umbRyan1,
            name: '레이니가든 파우치 3단우산_라이언',
            quantity: 1,
            price: 14000,
            category: 'umbrella',
            checked: false,
        },
        {
            id: 5,
            image_path: umbRyan2,
            name: '레이니가든 투명우산 그린_라이언',
            quantity: 1,
            price: 14000,
            category: 'umbrella',
            checked: false,
        },
        {
            id: 6,
            image_path: umbRyan3,
            name: '레이니가든 투명우산 옐로우_라이언',
            quantity: 1,
            price: 14000,
            category: 'umbrella',
            checked: false,
        },
        {
            id: 7,
            image_path: noteRyan1,
            name: '프루티 인덱스 스프링 노트S 리틀라이언',
            quantity: 1,
            price: 4000,
            category: 'stationery',
            checked: false,
        },
        {
            id: 8,
            image_path: noteRyan2,
            name: '프루티 인덱스 스프링 노트L 리틀라이언',
            quantity: 1,
            price: 8500,
            category: 'stationery',
            checked: false,
        },
        {
            id: 9,
            image_path: noteRyan3,
            name: '프루티 40P 클리어 파일 리틀라이언',
            quantity: 1,
            price: 6000,
            category: 'stationery',
            checked: false,
        },
        {
            id: 10,
            image_path: noteRyan4,
            name: '꿈일기 미니노트_라이언',
            quantity: 1,
            price: 3500,
            category: 'stationery',
            checked: false,
        },
        {
            id: 11,
            image_path: noteRyan5,
            name: '꿈일기 스프링노트',
            quantity: 1,
            price: 5000,
            category: 'stationery',
            checked: false,
        },
        {
            id: 12,
            image_path: pillowRyan,
            name: '배 볼록 바디 필로우_라이언',
            quantity: 1,
            price: 32000,
            category: 'bedding',
            checked: false,
        },
        {
            id: 13,
            image_path: pillowChunsik,
            name: '배 볼록 바디 필로우_춘식이',
            quantity: 1,
            price: 32000,
            category: 'bedding',
            checked: false,
        },
        {
            id: 14,
            image_path: pillowAppeach,
            name: '배 볼록 바디 필로우_어피치',
            quantity: 1,
            price: 32000,
            category: 'bedding',
            checked: false,
        },
        {
            id: 15,
            image_path: pillowMuji,
            name: '배 볼록 바디 필로우_무지',
            quantity: 1,
            price: 32000,
            category: 'bedding',
            checked: false,
        },
    ],
});
