<ol>
  <li>
    <h2>ブランチを切る</h2>
  </li>
  <ol>
    <li>devブランチに移動する</li>
    <p><pre><code>git checkout dev</code></pre></p>
    <li>開発するブランチを作成する</li>
    <p><pre><code>git branch feature/開発するブランチ名</code></pre></p>
    <p>例: yushin-ito が NavBar を開発: <code>yushin-ito-feature-nav-bar</code></p>
    <p>例: yushin-ito が NavBar を修正: <code>yushin-ito-fix-nav-bar</code></p>
    <li>開発するブランチに移動する</li>
    <p><pre><code>git checkout 開発するブランチ名</code></pre></p>
    <li>リモートに反映する</li>
    <p><pre><code>git push origin HEAD</code></pre></p>
  </ol>
  <br>
  <li>
    <h2>開発をする</h2>
  </li>
  <ol>
    <li>開発するブランチに移動する</li>
    <p><pre><code>git checkout 開発するブランチ名</code></pre></p>
    <li>変更内容を取得する</li>
    <p><pre><code>git pull origin dev</code></pre></p>
  </ol>
  <br>
  <li>
    <h2>コミットする</h2>
  </li>
  <ul>
    <li><h4>コミット方法<h4></li>
    <pre><code>git add -A
git commit -m "コミットメッセージ"
git push origin HEAD</code></pre>
    <li><h4>コミットメッセージ</h4></li>
    <p>コミットメッセージは <code>"主題: 内容"</code>の形式</p>
    <li><h4>コミットルール</h4></li>
<table>
  <thead>
    <tr>
      <th>種別</th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fix</td>
      <td>バグ修正</td>
    </tr>
    <tr>
      <td>hotfix</td>
      <td>クリティカル（深刻）なバグ修正</td>
    </tr>
    <tr>
      <td>add</td>
      <td>新規（ファイル）機能追加</td>
    </tr>
    <tr>
      <td>update</td>
      <td>機能修正（バグではない）</td>
    </tr>
    <tr>
      <td>change</td>
      <td>仕様変更</td>
    </tr>
    <tr>
      <td>clean</td>
      <td>整理（リファクタリング等）</td>
    </tr>
    <tr>
      <td>disable</td>
      <td>無効化（コメントアウト等）</td>
    </tr>
    <tr>
      <td>remove</td>
      <td>削除（ファイル）</td>
    </tr>
    <tr>
      <td>upgrade</td>
      <td>バージョンアップ</td>
    </tr>
    <tr>
      <td>revert</td>
      <td>変更取り消し</td>
    </tr>
  </tbody>
</table>
  </ul>
  <br>
  <li><h2>マージする</h2></li>
  <p>プルリクエストを作成する</p>
  <p>(例) <code>base: dev</code> ← <code>compare home-ui</code></p>
</ol>
