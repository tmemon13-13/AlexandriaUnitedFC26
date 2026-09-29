# AUFC Website — Photo Setup Guide

Create an `images/` folder next to the HTML files, then drop your photos in using these filenames.
The site is already coded to pull from these exact paths.

## Hero & General

| File | Used On | Description |
|------|---------|-------------|
| `images/hero.jpg` | Home page hero | Full-width hero background. The celebration/floodlight shots work great here. Use landscape orientation. |
| `images/team.jpg` | Home "about teaser" section | Team or group shot. Landscape 4:3 works best. |
| `images/team-photo.jpg` | About page story section | Team portrait or squad photo. |

## About Page Photo Strip (3 side-by-side images)

| File | Description |
|------|-------------|
| `images/action1.jpg` | Any action/match photo |
| `images/team-celebrate.jpg` | Celebration shot (the group huddle B&W photo is perfect here) |
| `images/action2.jpg` | Player celebrating (the #73 arms-raised shot is perfect) |

## Staff Headshots

Create `images/staff/` and name files as:

| File | Person |
|------|--------|
| `images/staff/hatzael-diaz.jpg` | Hatzael Diaz — Owner |
| `images/staff/daanish-dicardi-nelson.jpg` | Daanish Dicardi-Nelson — Operations Director |
| `images/staff/simond-kargbo.jpg` | Simond Kargbo — Head Coach |
| `images/staff/edwin-beltran.jpg` | Edwin Beltran — Co Head Coach |
| `images/staff/jordan-newbill.jpg` | Jordan Newbill — Assistant Coach |
| `images/staff/taylor-memon.jpg` | Taylor Memon — Director of Sponsorship & Communications |
| `images/staff/sam-meers.jpg` | Sam Meers — Social Media & Design |
| `images/staff/david-glorioso.jpg` | David Glorioso — Team Admin |
| `images/staff/miguel.jpg` | Miguel — Team Photographer |

Square crop (1:1) works best for staff cards.

## Sponsor Logos

Create `images/sponsors/` and add PNG files (transparent background preferred):

| File | Usage |
|------|-------|
| `images/sponsors/[sponsor-name].png` | Sponsor grid on Sponsors page |

To add a sponsor logo, replace the placeholder tile in sponsors.html:
```html
<!-- FROM: -->
<div class="sponsor-tile">Sponsor Logo</div>
<!-- TO: -->
<div class="sponsor-tile"><img src="images/sponsors/your-sponsor.png" alt="Sponsor Name"></div>
```

## Merch Product Photos

Create `images/merch/` and add photos:

| File | Product |
|------|---------|
| `images/merch/home-kit.jpg` | Home Kit 2026 |
| `images/merch/away-kit.jpg` | Away Kit (when ready) |
| `images/merch/training-top.jpg` | Training Top |
| `images/merch/hoodie.jpg` | Pullover Hoodie |
| `images/merch/tee.jpg` | Crest Tee |
| `images/merch/track-jacket.jpg` | Track Jacket |
| `images/merch/snapback.jpg` | Snapback |
| `images/merch/scarf.jpg` | Supporter Scarf |

Square (1:1) product photos look best. Solid or minimal backgrounds work great.

---

Until photos are added, the site will show dark navy gradient placeholders that look clean.
All images use `onerror` fallbacks, so the site won't break if a photo is missing.
