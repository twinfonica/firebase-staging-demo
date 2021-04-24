# Demo: Firebase Hosting with IP access control or basic authentication

Snippet for Firebase Hosting. This uses Functions for IP access control or basic authentication.

## Installation

Use the Firebase CLI based npm.

```bash
npm install --save
firebase login
firebase init
# Select Hosting and Functions.
firebase target:apply hosting admin-site YOUR-PROJECT-1
firebase target:apply hosting user-site YOUR-PROJECT-2
firebase deploy
```

## Notice
Add user to execute functions on Google Cloud Functions.

More details:
[Firebase functionsで 403 error Your client does not have permission to get URL from this server となった場合の解決策 - Qiita](https://qiita.com/toshiaki_takase/items/ce65cd5582a80917b52f)

## Usage
Open https://YOUR-PROJECT-1.web.app to use IP access control.

Open https://YOUR-PROJECT-2.web.app to use Basic Authentication.

## References
[FirebaseでBasic認証をかけてサイトを作る(Hostingする) - Qiita](https://qiita.com/567000/items/65f55eda8d7c6df09138)

[Firebase Hosting の一部だけ IP でアクセス制限する - Qiita](https://qiita.com/akagire/items/d1938c9246c074e7a9bd)

[Firebase Hostingで複数サイト管理設定 - Qiita](https://qiita.com/zaburo/items/f0fc863d1eb24cfe5cca)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)