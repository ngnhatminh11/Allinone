/*
[Script]
Locket Gold Safe Premium (RevenueCat Core)
Mục đích: Giả lập gói RevenueCat cục bộ cho Locket, an toàn 100%.
[MitM]
hostname = api.revenuecat.com, *.locket.camera
*/

if ($response.body) {
    let obj = JSON.parse($response.body);

    // Cấu hình gói Locket Gold giả lập
    const subscriptionDetail = {
        "auto_resume_date": null,
        "display_name": "locket_1600_1y",
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "billing_issues_detected_at": null,
        "management_url": "https://apps.apple.com/account/subscriptions",
        "period_type": "normal",
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "refunded_at": null,
        "unsubscribe_detected_at": null,
        "original_purchase_date": "2026-01-01T00:00:00Z",
        "purchase_date": "2026-01-01T00:00:00Z",
        "store": "app_store"
    };

    const entitlementDetail = {
        "grace_period_expires_date": null,
        "purchase_date": "2026-01-01T00:00:00Z",
        "product_identifier": "locket_1600_1y",
        "expires_date": "9999-01-09T10:10:14Z"
    };

    // Đút dữ liệu vào cấu trúc chuẩn của RevenueCat
    if (obj.subscriber) {
        obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
        obj.subscriber.entitlements = obj.subscriber.entitlements || {};
        
        // Kích hoạt quyền Gold và Premium
        obj.subscriber.subscriptions["locket_1600_1y"] = subscriptionDetail;
        obj.subscriber.entitlements["Gold"] = entitlementDetail;
        obj.subscriber.entitlements["pro"] = entitlementDetail;
    }

    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
