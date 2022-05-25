const validate = (values) => {
    const { title } = values;
    const error = {};
    if (!title) {
        error.title = 'Vui Lòng Nhập Tiêu Đề';
    } else if (title.trim().length < 5) {
        error.title = 'Tiêu Đề Phải Từ 5 Ký Tự';
    }
    return error;
};

export default validate;
