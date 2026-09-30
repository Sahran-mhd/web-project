# Team Web Project

This is a small team project developed using:

- HTML
- CSS
- JavaScript
- Git
- GitHub

## Team Members

### Member 1 — Home Page

Responsible for:

- `index.html`
- Home page sections
- Home page styling
- Home page JavaScript

Branch:

```text
feature/home-page
```

---

### Member 2 — Header and Footer

Responsible for:

- Header
- Navigation bar
- Footer
- Shared header/footer styles
- Shared navigation behavior

Branch:

```text
feature/header-footer
```

---

### Member 3 — Contact Page

Responsible for:

- `contact.html`
- Contact form
- Contact page styling
- Contact page JavaScript

Branch:

```text
feature/contact-page
```

---

# Branch Structure

```text
main
│
└── develop
    ├── feature/home-page
    ├── feature/header-footer
    └── feature/contact-page
```

`main` contains the final stable version.

`develop` is used to combine and test everyone's work.

Each member must work only on their own feature branch.

---

# Project Structure

```text
team-web-project/
│
├── index.html
├── contact.html
│
├── css/
│   ├── style.css
│   ├── header-footer.css
│   └── contact.css
│
├── js/
│   ├── main.js
│   ├── navigation.js
│   └── contact.js
│
├── components/
│   ├── header.html
│   └── footer.html
│
├── images/
│
└── README.md
```

---

# Getting Started

Clone the repository:

```bash
git clone REPOSITORY_URL
```

Enter the project folder:

```bash
cd team-web-project
```

---

# Before Starting Work

Always update the `develop` branch first:

```bash
git checkout develop
git pull origin develop
```

Then go to your own branch.

### Member 1

```bash
git checkout feature/home-page
```

### Member 2

```bash
git checkout feature/header-footer
```

### Member 3

```bash
git checkout feature/contact-page
```

Bring the latest `develop` changes into your branch:

```bash
git merge develop
```

---

# After Making Changes

Check your changes:

```bash
git status
```

Add them:

```bash
git add .
```

Commit:

```bash
git commit -m "Describe your changes"
```

Examples:

```bash
git commit -m "Create home page hero section"
```

```bash
git commit -m "Create shared header and footer"
```

```bash
git commit -m "Create contact form"
```

Push your branch:

```bash
git push origin YOUR-BRANCH-NAME
```

---

# Pull Request Process

Member 1:

```text
feature/home-page
        ↓
     develop
```

Member 2:

```text
feature/header-footer
        ↓
     develop
```

Member 3:

```text
feature/contact-page
        ↓
     develop
```

All work should be merged into `develop` using Pull Requests.

After all features are merged, test the full website.

Then create the final Pull Request:

```text
develop
   ↓
 main
```

---

# Team Rules

1. Do not push directly to `main`.
2. Do not work directly on `develop`.
3. Each member must use their own branch.
4. Pull the latest `develop` before starting new work.
5. Use clear commit messages.
6. Push changes regularly.
7. Create Pull Requests into `develop`.
8. Review another member's Pull Request before merging.
9. Test Header and Footer on both Home and Contact pages.
10. Merge `develop` into `main` only after the full website is tested.

---

# Work Distribution

```text
Member 1
│
└── Home Page
    ├── index.html
    ├── Home sections
    ├── CSS
    └── JavaScript


Member 2
│
└── Header and Footer
    ├── Header
    ├── Navigation
    ├── Footer
    ├── Shared CSS
    └── Shared JavaScript


Member 3
│
└── Contact Page
    ├── contact.html
    ├── Contact form
    ├── CSS
    └── JavaScript
```

---

# Recommended Work Order

Member 2 should ideally complete the Header and Footer first.

After the Header and Footer Pull Request is merged into `develop`, Members 1 and 3 should update their branches:

```bash
git checkout develop
git pull origin develop
```

Then:

```bash
git checkout feature/home-page
git merge develop
```

or:

```bash
git checkout feature/contact-page
git merge develop
```

This allows the Home and Contact pages to use the same Header and Footer and reduces Git conflicts.

---

# Final Workflow

```text
Member 1
feature/home-page
       ↓

Member 2
feature/header-footer
       ↓

Member 3
feature/contact-page
       ↓

   Pull Requests
       ↓
     develop
       ↓
   Full Testing
       ↓
      main
```
