// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Files',
    caption: 'Upload your 3D Files',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Files',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Upload New File',
                    type: 'item',
                    url: '/dashboard/newfile',
                },
                {
                    id: 'register3',
                    title: 'Files Uploaded',
                    type: 'item',
                    url: '/dashboard/fileuploaded',
                }
            ]
        }
    ]
};

export default pages;
