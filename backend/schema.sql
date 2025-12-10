-- Arbitrage Ads Database Schema
-- Run this SQL script to set up your database

CREATE DATABASE IF NOT EXISTS arbitrage_ads;
USE arbitrage_ads;

-- Articles table
CREATE TABLE IF NOT EXISTS articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  category VARCHAR(255),
  tags JSON,
  status ENUM('draft', 'published') DEFAULT 'draft',
  cover_image_url VARCHAR(255),
  is_multi_page BOOLEAN DEFAULT FALSE,
  meta_title VARCHAR(255),
  meta_description VARCHAR(255),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug),
  INDEX idx_status (status),
  INDEX idx_createdAt (createdAt)
);

-- Article pages table
CREATE TABLE IF NOT EXISTS article_pages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  article_id INT NOT NULL,
  page_index INT NOT NULL,
  title VARCHAR(255),
  contents JSON,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_article_id (article_id),
  INDEX idx_page_index (page_index),
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  UNIQUE KEY unique_article_page (article_id, page_index)
);

-- Pageviews table
CREATE TABLE IF NOT EXISTS pageviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(255) NOT NULL,
  article_id INT NULL,
  path TEXT NOT NULL,
  utm_source VARCHAR(255),
  utm_campaign VARCHAR(255),
  utm_term VARCHAR(255),
  device VARCHAR(100),
  country VARCHAR(100),
  referrer TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_session_id (session_id),
  INDEX idx_article_id (article_id),
  INDEX idx_created_at (created_at),
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE SET NULL
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(255) NOT NULL,
  event_name VARCHAR(255) NOT NULL,
  meta JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_session_id (session_id),
  INDEX idx_event_name (event_name),
  INDEX idx_created_at (created_at)
);

