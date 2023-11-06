export const APPHEADERDATA = [
    {
        name: "Jobs/Auditions",
        onClick: () => { },
        href: "/jobs-auditions",
        parentRoute: 'jobs-auditions',

    },
    {
        name: "Professionals",
        parentRoute: 'professionals',
        menuItems: [
            {
                name: "Search Professionals",
                onClick: () => { },
                href: "/professionals/search-professionals"
            },
            {
                name: "Create Profile",
                onClick: () => { },
                href: "/professionals/create-profile"
            },
        ]
    },
    {
        name: "Employers",
        parentRoute: 'employers',
        menuItems: [
            {
                name: "Search Employers",
                onClick: () => { },
                href: '/employers/search-employers'
            },
            {
                name: "Create Profile",
                onClick: () => { },
                href: '/employers/create-profile'
            }
        ]
    },
    {
        name: "Agents",
        parentRoute: 'agents',
        menuItems: [
            {
                name: "Search Agents",
                onClick: () => { },
                href: '/agents/search-agents'
            },
            {
                name: "Create Profile",
                onClick: () => { },
                href: '/agents/create-profile'
            }
        ]
    },
    {
        name: "Careers",
        onClick: () => { },
        href: "/careers",
        parentRoute: 'careers',

    },
    {
        name: "Service Directory",
        onClick: () => { },
        href: "/service-directory",
        parentRoute: 'service-directory',
    },
];
export const MenuSX = (paperSX) => ({
    ".MuiPaper-root": {
        boxShadow: '0px 8px 40px 0px rgba(0, 0, 0, 0.02)',
        ...paperSX
    },
    mt: '20px',
})
export const ListPaperSX = {
    sx: {
        py: 0,
        overflowY: "hidden",
        color: '#fff',
        ".MuiMenuItem-root": {
            fontFamily: `'Red Hat Text', sans-serif !important`,
            py: "8px",
            fontWeight: 300,
            fontSize: '14px',
            "&:hover": {
                color: '#151C48',
                bgcolor: '#E8E8ED',
            }
        },
    }
}
