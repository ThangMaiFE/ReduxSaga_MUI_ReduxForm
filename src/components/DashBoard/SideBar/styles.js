const styles = () => ({
    drawerPaper: {
        width: 240,
        maxWidth: 240,
        zIndex: 10,
        position: 'relative',
    },
    menuLink: {
        textDecoration: 'none',
        color: '#000000',
    },
    menuLinkActive: {
        '&>div': {
            backgroundColor: 'rgba(0,0,0,0.08)',
        },
    },
});

export default styles;
