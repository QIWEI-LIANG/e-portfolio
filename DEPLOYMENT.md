# 网站发布与域名说明 / Website Deployment & Domain Guide

这份说明的目标：创建一个老师可以直接点击打开的网站链接。

Goal: create a public website URL that your instructor can open directly.

## 方案 A：GitHub Pages 免费链接 / Option A: Free GitHub Pages URL

这是最快、免费、最适合课程提交的方式。不需要购买域名。

This is the fastest free option for coursework submission. No paid domain is required.

发布后，你的网站地址会类似：

After deployment, your website URL will look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/e-portfolio/
```

如果你的 GitHub 用户名是 `qiweiliang`，仓库名是 `e-portfolio`，老师点击的链接就是：

If your GitHub username is `qiweiliang` and the repository name is `e-portfolio`, your instructor should open:

```text
https://qiweiliang.github.io/e-portfolio/
```

## 第一步：创建 GitHub 仓库 / Step 1: Create a GitHub Repository

中文：

1. 登录 GitHub。
2. 点击右上角 `+`。
3. 选择 `New repository`。
4. Repository name 填：

```text
e-portfolio
```

5. 选择 `Public`。
6. 点击 `Create repository`。

English:

1. Log in to GitHub.
2. Click the `+` button in the top-right corner.
3. Select `New repository`.
4. Set the repository name to:

```text
e-portfolio
```

5. Choose `Public`.
6. Click `Create repository`.

## 第二步：上传网站文件 / Step 2: Upload Website Files

中文：

把下面这些文件和文件夹上传到仓库根目录。根目录就是打开仓库后最外层的位置，不要再套一层文件夹。

English:

Upload the following files and folders to the repository root. The root means the top-level folder of the repository. Do not put everything inside another folder.

必须上传 / Required:

```text
index.html
styles.css
script.js
.nojekyll
assets/
images/
```

不要上传 / Do not upload:

```text
Qiwei Liang-cv.docx
~$wei Liang-cv.docx
```

原因：原始 Word 文件可能包含电话号码或其他隐私信息。网页里已经放了脱敏后的 CV 预览。

Reason: the original Word files may contain phone numbers or private information. The website already includes a sanitized CV preview.

## 第三步：启用 GitHub Pages / Step 3: Enable GitHub Pages

中文：

1. 打开你的 GitHub 仓库。
2. 点击 `Settings`。
3. 左侧找到 `Pages`。
4. 在 `Build and deployment` 里设置：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. 点击 `Save`。
6. 等待 1-3 分钟。
7. GitHub 会显示你的公开网站链接。

English:

1. Open your GitHub repository.
2. Click `Settings`.
3. Find `Pages` in the left sidebar.
4. Under `Build and deployment`, set:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Click `Save`.
6. Wait 1-3 minutes.
7. GitHub will show your public website URL.

## 第四步：提交给老师的链接 / Step 4: Submit the Link to Your Instructor

中文：

把 GitHub Pages 给你的链接提交给老师即可。老师不需要下载文件，也不需要安装软件，点击链接就能看到网站。

English:

Submit the GitHub Pages URL to your instructor. They do not need to download files or install software. They can open the website by clicking the link.

提交格式示例 / Submission example:

```text
E-Portfolio Website:
https://YOUR-GITHUB-USERNAME.github.io/e-portfolio/
```

## 方案 B：自定义域名 / Option B: Custom Domain

如果老师明确要求“真正的域名”，你需要先购买或拥有一个域名，例如：

If your instructor specifically requires a custom domain, you need to buy or own a domain, for example:

```text
qiweiliang.com
portfolio-qiwei.com
```

然后你可以创建一个子域名：

Then you can create a subdomain:

```text
portfolio.qiweiliang.com
```

### GitHub 仓库里添加 CNAME 文件 / Add a CNAME File in GitHub

中文：

在仓库根目录创建一个名为 `CNAME` 的文件。文件内容只写你的域名，不要写 `https://`，不要加其他文字。

English:

Create a file named `CNAME` in the repository root. The file should contain only your domain. Do not include `https://` or extra text.

示例 / Example:

```text
portfolio.qiweiliang.com
```

### 在域名服务商设置 DNS / Configure DNS at Your Domain Provider

中文：

登录你购买域名的网站，例如 Namecheap、GoDaddy、Cloudflare、阿里云或腾讯云。进入 DNS 设置，添加一条 CNAME 记录：

English:

Log in to your domain provider, such as Namecheap, GoDaddy, Cloudflare, Alibaba Cloud, or Tencent Cloud. Open DNS settings and add a CNAME record:

```text
Type: CNAME
Name: portfolio
Value: YOUR-GITHUB-USERNAME.github.io
```

简写形式 / Short form:

```text
CNAME portfolio -> YOUR-GITHUB-USERNAME.github.io
```

如果你想让根域名也能打开，例如 `qiweiliang.com`，GitHub Pages 通常需要 A 记录：

If you want the root domain to work, such as `qiweiliang.com`, GitHub Pages usually needs A records:

```text
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### 在 GitHub Pages 中填写自定义域名 / Set the Custom Domain in GitHub Pages

中文：

1. 打开仓库 `Settings -> Pages`。
2. 找到 `Custom domain`。
3. 输入你的域名，例如：

```text
portfolio.qiweiliang.com
```

4. 点击 `Save`。
5. 等 DNS 生效，通常需要几分钟到 24 小时。
6. 勾选 `Enforce HTTPS`。

English:

1. Open `Settings -> Pages` in your repository.
2. Find `Custom domain`.
3. Enter your domain, for example:

```text
portfolio.qiweiliang.com
```

4. Click `Save`.
5. Wait for DNS propagation. It can take a few minutes to 24 hours.
6. Enable `Enforce HTTPS`.

## 最终检查清单 / Final Checklist

中文：

- 老师能直接打开链接。
- 首页能正常显示。
- Portfolio 图片能正常加载，特别是 `images/raw-microscope.jpg`、`images/result1.png`、`images/result2.png`。
- 页面没有电话号码、家庭地址、具体门牌号。
- 没有上传原始 Word 文件。
- GitHub Pages 设置为 `main` 分支 `/root`。

English:

- The instructor can open the URL directly.
- The homepage loads correctly.
- Portfolio images load correctly, especially `images/raw-microscope.jpg`, `images/result1.png`, and `images/result2.png`.
- The page does not expose phone numbers, home addresses, or street-level details.
- The original Word files are not uploaded.
- GitHub Pages is set to the `main` branch and `/root` folder.
