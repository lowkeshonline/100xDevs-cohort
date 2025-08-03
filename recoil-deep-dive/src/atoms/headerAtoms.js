import { atom, selector } from 'recoil';

export const messagesAtom = atom ({
    key : "messagesAtom",
    default : 90
})

export const friendsAtom = atom ({
    key : "friendsAtom",
    default : 68
})

export const postsAtom = atom ({
    key : "postsAtom",
    default : 99
})

export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({ get }) => {
        const totalNotifications = (get(messagesAtom) + get(friendsAtom) + get(postsAtom));
        return totalNotifications;
    }
})