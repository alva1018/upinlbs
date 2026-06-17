<template>
  <div class="competition-page content">
    <p class="content-title">Competition Overview</p>
    <p class="content-text">
      The International Conference on Ubiquitous Positioning, Indoor Navigation
      and Location-Based Services (UPINLBS 2026) is pleased to announce the
      official launch of the 2nd Indoor Positioning Competition. The competition
      aims to bring together researchers from academia and industry to
      comparatively evaluate various approaches and explore new methodologies
      for seamless indoor positioning. Two tracks have been established for this
      year's competition, and detailed information has been released. We warmly
      welcome all interested teams to participate.
    </p>
    <p class="content-title">Competition Tracks</p>
    <div class="topics-table">
      <div class="topic-row">
        <span class="topic-cell"
          >Track 1: Ubiquitous Positioning for Vehicle–Smartphone
          Integration</span
        ><span class="topic-cell"
          >Track 2: Localization in Forest Environments via Handheld LiDAR</span
        >
      </div>
    </div>
    <div class="track-details">
      <div class="track-section">
        <h3 class="track-title">
          Track 1: Ubiquitous Positioning for Vehicle–Smartphone Integration
        </h3>
        <p class="track-description">
          For Track 1, the testing dataset consists of full-coverage
          observations and partial ground-truth coordinates collected in two
          real underground parking garages. The observation data include
          inertial measurements, geomagnetic readings, barometric pressure,
          Wi-Fi, and 5G signals, all recorded using an unmodified Huawei P40
          smartphone. The vehicle-based data collection may span multiple
          underground levels, and partial data absence is expected in certain
          segments. One of the recorded scenarios will be randomly selected as
          the official competition dataset.
        </p>
        <div class="submission-info">
          <strong>Submission Format:</strong> Teams must submit results in .csv
          format including four columns: timestamp and X/Y/Z coordinates.
          <br /><strong>Test Data:</strong>
          <a
            href="https://pan.baidu.com/s/17FMctDDKPHVT8brt4FuIKQ"
            target="_blank"
            >https://pan.baidu.com/s/17FMctDDKPHVT8brt4FuIKQ</a
          ><strong> extraction code:</strong>
          <span style="color: red">scqm</span><br /><strong
            >Competition Data:
            <a
              href="https://pan.baidu.com/s/1EM7vDNMWUI1wwgHCWCZoUQ"
              target="_blank"
              >https://pan.baidu.com/s/1EM7vDNMWUI1wwgHCWCZoUQ</a
            ><strong> extraction code:</strong>
            <span style="color: red">iqhx</span></strong
          >
        </div>
      </div>
      <div class="track-section">
        <h3 class="track-title">
          Track 2: Localization in Forest Environments via Handheld LiDAR
        </h3>
        <p class="track-description">
          For Track 2, the test dataset consists of handheld mobile laser
          scanning data collected in two campus forest plots, along with
          corresponding reference trajectories. The raw data include Ouster
          OS1-128 LiDAR point cloud (/os_cloud_node_1/points) and its internal
          IMU data (/os_cloud_node_1/imu), both stored in ROS Bag format.
          Ground-truth trajectories in KITTI format are stored in the file
          "gt_pose_kitti.txt". The extrinsic parameters from the IMU to the
          LiDAR sensor (M_imu_to_sensor) are provided by the manufacturer. For
          detailed descriptions of the dataset, please refer to the README file.
          During the competition data release phase, we will randomly select a
          plot for the competition.
        </p>
        <div class="submission-info">
          <strong>Submission Format:</strong> Teams must submit results
          following the format of gt_pose_kitti.txt. <br /><strong
            >Test Data:</strong
          >
          <a
            href="https://pan.baidu.com/s/1kUP_E328ABsXcO7aF-FVUg"
            target="_blank"
            >https://pan.baidu.com/s/1kUP_E328ABsXcO7aF-FVUg</a
          ><strong> extraction code:</strong>
          <span style="color: red">dsgx</span><br /><strong
            >Competition Data:
            <a
              href="https://pan.baidu.com/s/1ooEEGIdZzmqbKbNkstLLCg"
              target="_blank"
              >https://pan.baidu.com/s/1ooEEGIdZzmqbKbNkstLLCg</a
            ><strong> extraction code:</strong>
            <span style="color: red">fue3</span></strong
          >
        </div>
      </div>
    </div>
    <div class="competition-rules">
      <p class="content-text">
        For each track, teams may submit up to three localization results. The
        evaluation metric is RMSE, and the best score among the three
        submissions will serve as the final competition result.
      </p>
    </div>
    <p class="content-title">Participation Procedure</p>
    <div class="participation-section">
      <p class="content-text">
        Participating teams can be any individual or team. Download the
        competition registration form (<a
          href="https://pan.baidu.com/s/1osE9-wzifLhLRlusXbjM5g"
          target="_blank"
          class="text-link"
          >https://pan.baidu.com/s/1osE9-wzifLhLRlusXbjM5g</a
        >, extraction code: <strong>rwvs</strong>) from the competition webpage
        on the conference website (<a
          href="https://upinlbs2025.ubinp.com/COMPETITION"
          target="_blank"
          class="text-link"
          >https://upinlbs2025.ubinp.com/COMPETITION</a
        >), fill in the relevant information, and send it to the designated
        email address for the competition (<a
          href="mailto:UPINLBS2025COMP@163.com"
          class="text-link"
          >UPINLBS2025COMP@163.com</a
        >). Registration will be confirmed upon receiving a confirmation email.
      </p>
    </div>
    <p class="content-title">Important Dates</p>
    <div class="dates-table">
      <div class="date-row header-row">
        <div class="date-event">Event</div>
        <div class="date-time">Date</div>
      </div>
      <div class="date-row">
        <div class="date-event">Release of Test Data</div>
        <div class="date-time">Nov. 12</div>
      </div>
      <div class="date-row">
        <div class="date-event">
          Release of Competition Data &amp; Opening of Result Submissions (up to
          3 submissions)
        </div>
        <div class="date-time">Nov. 19</div>
      </div>
      <div class="date-row">
        <div class="date-event">Final Deadline for Result Submission</div>
        <div class="date-time">Dec. 12</div>
      </div>
      <div class="date-row">
        <div class="date-event">Online Announcement of the Award Winners</div>
        <div class="date-time">Dec. 15</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.competition-page {
  .topics-table {
    .topic-cell {
      font-weight: 700;
    }
  }
  .submission-info {
    a {
      overflow-wrap: anywhere;
    }
  }
  .track-details {
    margin: 40px 0;
  }
  .competition-rules {
    background: #fff8e1;
    padding: 20px;
    border-radius: 8px;
    margin: 30px 0;
    border-left: 4px solid #ffc107;
  }
  .participation-section strong {
    color: #e74c3c;
    background: #ffeaa7;
    padding: 2px 6px;
    border-radius: 3px;
  }
  .dates-table {
    margin: 40px 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid #e0e0e0;
    background: #fff;
  }

  .dates-table .date-row {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    transition: all 0.3s ease;
  }

  .dates-table .date-row:last-child {
    border-bottom: none;
  }

  .dates-table .date-row:hover {
    background-color: #f8f9fa;
  }

  .dates-table .date-row.header-row {
    background-color: #366891;
    color: #fff;
    font-weight: 700;
  }

  .dates-table .date-row.header-row .date-event,
  .dates-table .date-row.header-row .date-time {
    font-weight: 700;
  }

  .dates-table .date-row .date-event {
    flex: 3;
    padding: 18px 24px;
    line-height: 1.6;
    font-size: 16px;
    color: #2c3e50;
    border-right: 1px solid #e0e0e0;
  }

  .dates-table .date-row .date-time {
    flex: 1;
    padding: 18px 24px;
    line-height: 1.6;
    font-size: 16px;
    color: #366891;
    font-weight: 700;
    text-align: center;
    background-color: #f8f9fa;
  }

  .dates-table .date-row.header-row .date-event,
  .dates-table .date-row.header-row .date-time {
    color: #fff;
    background-color: transparent;
  }
}
@media (max-width: 768px) {
  .content {
    padding: 20px 0;
  }

  .content .content-title {
    font-size: 28px;
  }

  .content .content-text {
    font-size: 16px;
    line-height: 1.6;
  }

  .topics-table .topic-row {
    flex-direction: column;
  }

  .topics-table .topic-cell {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
    padding: 14px 20px;
  }

  .topics-table .topic-cell[data-v-70da15d2]:last-child {
    border-bottom: none;
  }

  .track-section {
    padding: 15px;
  }

  .track-section .track-title {
    font-size: 1.1rem;
  }
  .track-section {
    background: #f9f9f9;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    border-left: 4px solid #366891;
  }
  .dates-table .date-row {
    flex-direction: column;
  }

  .dates-table .date-row .date-event[data-v-70da15d2],
  .dates-table .date-row .date-time {
    flex: none;
    width: 100%;
    text-align: left;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }

  .dates-table .date-row .date-time {
    background-color: #f8f9fa;
    font-weight: 700;
  }

  .dates-table .date-row.header-row .date-event[data-v-70da15d2],
  .dates-table .date-row.header-row .date-time {
    text-align: center;
  }
}
</style>
