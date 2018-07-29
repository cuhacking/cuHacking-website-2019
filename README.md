# cuhacks19

## Migrating last years website
Rename the current repository: cuhacking.github.io -> cuhacksYY
Edit the CNAME file: YYYY.cuhacking.com
Create a DNS record for the subdomain
  host = YYYY
  value = cuhacking.github.io

Create a new repository named cuhacking.github.io
Add a CNAME file: cuhacking.com

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
