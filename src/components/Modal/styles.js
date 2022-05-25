const styles = (theme) => ({
    modal: {},
    textField: {
        width: '100%',
    },
    header: {
        backgroundColor: theme.color.primary,
        color: theme.color.textColor,
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    title: {
        color: theme.color.textColor,
        fontWeight: 700,
        textTransform: 'initial',
    },
    icon: {
        cursor: 'pointer',
        fontSize: 30,
    },
    content: {
        padding: theme.spacing(2),
    },
});
export default styles;
