/*
[Script]
Spotify iPad Trick for iPhone - Tự quản lý bởi người dùng
Mục đích: Đổi định danh thiết bị thành iPad để mở khóa chuyển bài tự do, an toàn 100%.
*/

let url = $request.url;
if (url.includes('com:443')) {
    url = url.replace(/com:443/, 'com');
}
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
}

$done({ url });
