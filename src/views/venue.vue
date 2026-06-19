<script setup>
import { ref } from "vue";

const initialMapSrc =
  "https://www.openstreetmap.org/export/embed.html?bbox=117.17691%2C31.75608%2C117.18891%2C31.76448&layer=mapnik&marker=31.76028%2C117.18291";

const mapFrameKey = ref(0);

function resetMapView() {
  mapFrameKey.value += 1;
}
</script>

<template>
  <div class="venue page-shell">
    <section class="venue-hero page-card">
      <p class="eyebrow">Conference Venue</p>
      <h1 class="page-title">Anhui University (Qingyuan Campus)</h1>
      <div class="venue-details">
        <div class="detail-item">
          <span>Main Venue</span>
          <strong>Room D201, Materials Science Building</strong>
        </div>
        <div class="detail-item">
          <span>Address</span>
          <strong>Anhui University (Qingyuan Campus), Shushan District, Hefei, Anhui, China</strong>
        </div>
      </div>
    </section>

    <section class="map-card page-card">
      <div class="section-heading">
        <h2 class="section-title">Map</h2>
        <a
          class="map-link"
          href="https://uri.amap.com/search?keyword=%E5%AE%89%E5%BE%BD%E5%A4%A7%E5%AD%A6%E7%A3%AC%E8%8B%91%E6%A0%A1%E5%8C%BA%20%E6%9D%90%E6%96%99%E7%A7%91%E5%AD%A6%E5%A4%A7%E6%A5%BC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Amap
        </a>
      </div>

      <div class="map-frame" aria-label="Map showing Anhui University Qingyuan Campus">
        <button class="map-reset" type="button" aria-label="Reset map view" @click="resetMapView">
          <span aria-hidden="true"></span>
        </button>
        <iframe
          :key="mapFrameKey"
          title="Anhui University Qingyuan Campus map"
          :src="initialMapSrc"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p class="map-fallback">
        If the embedded map does not load, use the
        <a
          href="https://uri.amap.com/search?keyword=%E5%AE%89%E5%BE%BD%E5%A4%A7%E5%AD%A6%E7%A3%AC%E8%8B%91%E6%A0%A1%E5%8C%BA%20%E6%9D%90%E6%96%99%E7%A7%91%E5%AD%A6%E5%A4%A7%E6%A5%BC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amap search link
        </a>
        for navigation.
      </p>
    </section>

    <section class="getting-there page-card">
      <h2 class="section-title">Getting There</h2>
      <p class="content-text">
        The nearby Anda Qingyuan Xiaoqu / Anhui University Qingyuan Campus
        metro station on Line 3 serves the south gate area of the campus.
        Please follow campus signage or local guidance to the Materials Science
        Building after arrival.
      </p>
    </section>

    <section class="hotels page-card">
      <h2 class="section-title">Nearby Hotels</h2>
      <div class="hotel-grid">
        <div class="hotel-card">
          <div class="hotel-info">
            <strong>翡翠湖迎宾馆 (Emerald Lakeside Hotel)</strong>
            <p>安徽省合肥市蜀山区容成路1号</p>
            <span>Approx. 1.6 km</span>
            <a
              href="https://uri.amap.com/search?keyword=%E7%BF%A1%E7%BF%A0%E6%B9%96%E8%BF%8E%E5%AE%BE%E9%A6%86"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Amap
            </a>
          </div>
        </div>

        <div class="hotel-card">
          <div class="hotel-info">
            <strong>全季酒店（合肥经开区大学城） (Quanji Hotel)</strong>
            <p>合肥市金寨南路与汤口路交叉口</p>
            <span>Approx. 1.5 km</span>
            <a
              href="https://uri.amap.com/search?keyword=%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%EF%BC%88%E5%90%88%E8%82%A5%E7%BB%8F%E5%BC%80%E5%8C%BA%E5%A4%A7%E5%AD%A6%E5%9F%8E%EF%BC%89"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Amap
            </a>
          </div>
        </div>

        <div class="hotel-card">
          <div class="hotel-info">
            <strong>合肥经开区希尔顿欢朋酒店 (Hilton Hampton Inn)</strong>
            <p>合肥市繁华大道与百鸟路交叉口</p>
            <span>Approx. 4.5 km</span>
            <a
              href="https://uri.amap.com/search?keyword=%E5%90%88%E8%82%A5%E7%BB%8F%E5%BC%80%E5%8C%BA%E5%B8%8C%E5%B0%94%E9%A1%BF%E6%AC%A2%E6%9C%8B%E9%85%92%E5%BA%97"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Amap
            </a>
          </div>
        </div>

        <div class="hotel-card">
          <div class="hotel-info">
            <strong>合肥肥西希尔顿花园酒店 (Hilton Garden Inn)</strong>
            <p>合肥市金寨南路与紫石路交叉口绿地新都会G3栋</p>
            <span>Approx. 2.9 km</span>
            <a
              href="https://uri.amap.com/search?keyword=%E5%90%88%E8%82%A5%E8%82%A5%E8%A5%BF%E5%B8%8C%E5%B0%94%E9%A1%BF%E8%8A%B1%E5%9B%AD%E9%85%92%E5%BA%97"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Amap
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.venue {
  display: grid;
  gap: 24px;
}

.venue-hero {
  display: grid;
  gap: 20px;
}

.eyebrow {
  margin: 0;
  color: var(--color-accent);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.venue-details {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.detail-item {
  padding: 18px 20px;
  background: var(--color-primary-soft);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.detail-item span,
.detail-item strong {
  display: block;
}

.detail-item span {
  margin-bottom: 8px;
  color: var(--color-text-muted);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.detail-item strong {
  color: var(--color-primary-strong);
  font-size: 18px;
  line-height: 1.45;
}

.section-heading {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 20px;
}

.section-heading .section-title {
  margin-bottom: 0;
}

.map-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 10px 16px;
  color: #fff;
  font-weight: 740;
  white-space: nowrap;
  background: var(--color-primary);
  border-radius: 6px;
}

.map-link:hover {
  color: #fff;
  background: var(--color-primary-strong);
}

.map-frame {
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16 / 9;
  min-height: 320px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: #f8fbfd;
}

.map-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.map-reset {
  position: absolute;
  top: 72px;
  right: 10px;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 2px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.map-reset:hover {
  background: #f4f4f4;
}

.map-reset span {
  width: 10px;
  height: 10px;
  background: var(--color-primary);
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--color-primary);
}

.map-fallback {
  margin: 14px 0 0;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.map-fallback a {
  color: var(--color-primary);
  font-weight: 740;
}

.getting-there .content-text {
  margin-bottom: 0;
}

.hotel-grid {
  display: grid;
  gap: 16px;
}

.hotel-card {
  display: grid;
  min-height: 188px;
  overflow: hidden;
  background: var(--color-primary-soft);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.hotel-info {
  display: grid;
  align-content: start;
  gap: 10px;
  padding: 18px 20px;
}

.hotel-info strong {
  color: var(--color-primary-strong);
  font-size: 20px;
  line-height: 1.35;
}

.hotel-info p {
  margin: 0;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.hotel-info span {
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hotel-info a {
  width: fit-content;
  margin-top: 4px;
  color: var(--color-primary);
  font-weight: 740;
}

@media (max-width: 760px) {
  .venue-details {
    grid-template-columns: 1fr;
  }

  .section-heading {
    display: grid;
  }

  .map-link {
    width: 100%;
  }

  .map-frame {
    aspect-ratio: 4 / 3;
    min-height: 260px;
  }
}
</style>
