# QuizMaster

QuizMaster là một ứng dụng web đơn giản để tạo và quản lý các câu hỏi trắc nghiệm. Dự án này được phát triển nhằm hỗ trợ các giáo viên và học sinh trong việc tạo ra các bài kiểm tra nhanh chóng và dễ dàng.

## Tính năng

- Tạo câu hỏi trắc nghiệm với các lựa chọn đa dạng.
- Quản lý các bộ câu hỏi (tạo, sửa, xóa).
- Chấm điểm tự động dựa trên câu trả lời của học sinh.
- Giao diện người dùng trực quan và dễ sử dụng.

## Công nghệ sử dụng

- **Frontend**: HTML, CSS (Tailwind CSS), JavaScript
- **Backend**: Node.js, Express
- **Cơ sở dữ liệu**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Cài đặt

### Yêu cầu hệ thống

- Node.js v14 trở lên
- MongoDB v4.4 trở lên

### Hướng dẫn cài đặt

1. **Clone repository** về máy của bạn:

    ```bash
    git clone https://github.com/your-username/quizmaster.git
    cd quizmaster
    ```

2. **Cài đặt các gói cần thiết**:

    ```bash
    npm install
    ```

3. **Cấu hình biến môi trường**:

    Tạo tệp `.env` trong thư mục gốc của dự án và thêm các biến môi trường cần thiết:

    ```bash
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/quizmaster
    JWT_SECRET=your_jwt_secret
    ```

4. **Chạy ứng dụng**:

    ```bash
    npm start
    ```

    Truy cập ứng dụng tại `http://localhost:3000`.

## Hướng dẫn sử dụng

- **Tạo câu hỏi**: Truy cập trang quản lý câu hỏi và thêm câu hỏi mới.
- **Quản lý bộ câu hỏi**: Bạn có thể chỉnh sửa hoặc xóa các bộ câu hỏi hiện có.
- **Thực hiện bài kiểm tra**: Học sinh có thể thực hiện bài kiểm tra và nhận kết quả ngay lập tức.

## Đóng góp

Chúng tôi rất hoan nghênh các đóng góp từ cộng đồng. Nếu bạn muốn đóng góp, vui lòng tạo một nhánh mới, thực hiện các thay đổi, và mở một Pull Request. Đừng quên kiểm tra lại mã của bạn trước khi gửi Pull Request.

### Các bước đóng góp:

1. Fork repository này.
2. Tạo một nhánh mới (`git checkout -b feature/ten-chuc-nang`).
3. Commit các thay đổi (`git commit -am 'Thêm chức năng X'`).
4. Push lên nhánh mới (`git push origin feature/ten-chuc-nang`).
5. Mở Pull Request.

## License

Dự án này được cấp phép theo MIT License - xem tệp [LICENSE](LICENSE) để biết thêm chi tiết.

## Liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc phản hồi nào, vui lòng liên hệ qua email [dungldps41484@gmail.com](mailto:dungldps41484@gmail.com).

---

