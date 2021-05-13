-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 13, 2020 at 08:15 AM
-- Server version: 8.0.21
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `accounts_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE `assets` (
  `id` bigint UNSIGNED NOT NULL,
  `assets_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `opening_balance` decimal(8,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`id`, `assets_name`, `opening_balance`, `created_at`, `updated_at`) VALUES
(1, 'Cash', '0.00', '2020-09-23 02:58:21', '2020-09-23 02:58:21'),
(2, 'Bank', '0.00', '2020-09-23 02:58:21', '2020-09-23 02:58:21');

-- --------------------------------------------------------

--
-- Table structure for table `custom_vouchers`
--

CREATE TABLE `custom_vouchers` (
  `id` bigint UNSIGNED NOT NULL,
  `voucher_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_counter` bigint NOT NULL DEFAULT '1',
  `accounting_year` int NOT NULL,
  `prefix` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suffix` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delimiter` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '/',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `custom_vouchers`
--

INSERT INTO `custom_vouchers` (`id`, `voucher_name`, `last_counter`, `accounting_year`, `prefix`, `suffix`, `delimiter`, `created_at`, `updated_at`) VALUES
(1, 'Income', 14, 2021, 'INC', NULL, '-', '2020-09-25 02:03:53', '2020-10-09 02:56:22'),
(2, 'Expenditure', 161, 2021, 'EXP', NULL, '-', '2020-09-25 02:16:28', '2020-10-09 02:54:06');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ledgers`
--

CREATE TABLE `ledgers` (
  `id` bigint UNSIGNED NOT NULL,
  `ledger_type_id` bigint UNSIGNED NOT NULL,
  `ledger_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `inforce` tinyint NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ledgers`
--

INSERT INTO `ledgers` (`id`, `ledger_type_id`, `ledger_name`, `inforce`, `created_at`, `updated_at`) VALUES
(1, 1, 'Received from Owner', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(2, 1, 'Received LC', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(3, 1, 'Refinish income', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(4, 1, 'Misc. Received', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(5, 2, 'Withdraw by Owner', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(6, 2, 'Electricity Bill Paid', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(7, 2, 'Municipal Tax', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(8, 2, 'Saraswati Puja Expenditure', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(9, 2, 'Biswakarma Puja Expenditure', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(10, 2, 'Daily Puja Expenditure', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(11, 2, 'Daily Tiffin Expenditure', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(12, 2, 'Muchi', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(13, 2, 'Sweeper', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(14, 2, 'Van Rent', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(15, 2, 'Car Rent', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(16, 2, 'TA for Salesman', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(17, 2, 'Gas Equipment purchase', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(18, 2, 'Donation Paid', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(19, 2, 'Market Expenditure for owner', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(20, 2, 'Gas Expenditure', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(21, 2, 'Salary paid', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(22, 2, 'Misc. Expenditure', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(23, 2, 'Cleaning Material Purchase', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(24, 2, 'Bala Making Charge Paid', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(25, 2, 'Dice Charge paid', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(26, 2, 'Color Purchase', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(27, 2, 'Electric worker paid ', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(28, 2, 'Electric Equipment Purchase', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(29, 2, 'Costic Purchase', 1, '2020-09-23 02:58:20', '2020-09-23 02:58:20'),
(30, 2, 'Acid Purchase', 1, '2020-09-23 02:58:21', '2020-09-23 02:58:21'),
(31, 2, 'Sohaga Purchase', 1, '2020-09-23 02:58:21', '2020-09-23 02:58:21'),
(32, 2, 'Bronze Purchase', 1, '2020-09-23 02:58:21', '2020-09-23 02:58:21'),
(33, 2, 'Copper Purchase', 1, '2020-09-23 02:58:21', '2020-09-23 02:58:21'),
(34, 2, 'Phone Bill Paid', 1, '2020-09-23 02:58:21', '2020-09-23 02:58:21'),
(35, 2, 'Stationary', 1, '2020-10-08 02:28:03', '2020-10-08 02:28:03'),
(36, 2, 'Travelling Expenditure', 1, '2020-10-08 02:35:01', '2020-10-08 02:35:01'),
(37, 2, 'Legal Expenditure', 1, '2020-10-08 02:37:57', '2020-10-08 02:37:57'),
(38, 2, 'Taunch Expenditure', 1, '2020-10-08 02:41:39', '2020-10-08 02:41:39'),
(39, 2, 'Workshop Equipment Expenditure', 1, '2020-10-08 02:45:09', '2020-10-08 02:45:09'),
(40, 2, 'Distil Water', 1, '2020-10-08 02:55:14', '2020-10-08 02:55:14'),
(41, 2, 'Office equipment', 1, '2020-10-08 02:58:00', '2020-10-08 02:58:00'),
(42, 2, 'Entertainment Expenditure', 1, '2020-10-09 02:25:16', '2020-10-09 02:25:16'),
(43, 2, 'Fuel Expenditure', 1, '2020-10-09 02:26:46', '2020-10-09 02:26:46'),
(44, 2, 'Stone Purchase', 1, '2020-10-09 02:34:09', '2020-10-09 02:34:09'),
(45, 2, 'Service Charge Paid', 1, '2020-10-09 02:38:17', '2020-10-09 02:38:17'),
(46, 2, 'Label Expenditure', 1, '2020-10-09 02:46:32', '2020-10-09 02:46:32');

-- --------------------------------------------------------

--
-- Table structure for table `ledger_types`
--

CREATE TABLE `ledger_types` (
  `id` bigint UNSIGNED NOT NULL,
  `ledger_type_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ledger_types`
--

INSERT INTO `ledger_types` (`id`, `ledger_type_name`, `value`, `created_at`, `updated_at`) VALUES
(1, 'Income', 1, '2020-09-23 02:58:19', '2020-09-23 02:58:19'),
(2, 'Expenditure', -1, '2020-09-23 02:58:19', '2020-09-23 02:58:19');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(19, '2019_08_19_000000_create_failed_jobs_table', 1),
(20, '2020_04_29_175532_create_person_types_table', 1),
(21, '2020_04_29_185531_create_users_table', 1),
(22, '2020_09_16_180151_create_ledger_types_table', 1),
(23, '2020_09_16_180356_create_ledgers_table', 1),
(24, '2020_09_16_180932_create_assets_table', 1),
(25, '2020_09_16_181030_create_vouchers_table', 1),
(26, '2020_09_16_181047_create_transactions_table', 1),
(27, '2020_09_18_140801_create_custom_vouchers_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `person_types`
--

CREATE TABLE `person_types` (
  `id` bigint UNSIGNED NOT NULL,
  `person_type_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `inforced` tinyint NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `person_types`
--

INSERT INTO `person_types` (`id`, `person_type_name`, `inforced`, `created_at`, `updated_at`) VALUES
(1, 'Owner', 1, '2020-09-23 02:58:17', '2020-09-23 02:58:17'),
(2, 'Manager', 1, '2020-09-23 02:58:17', '2020-09-23 02:58:17'),
(3, 'Manager Workshop', 1, '2020-09-23 02:58:17', '2020-09-23 02:58:17'),
(4, 'Manager Sales', 1, '2020-09-23 02:58:17', '2020-09-23 02:58:17'),
(5, 'Manager Accounts', 1, '2020-09-23 02:58:18', '2020-09-23 02:58:18'),
(6, 'Office Staff', 1, '2020-09-23 02:58:18', '2020-09-23 02:58:18'),
(7, 'Agent', 1, '2020-09-23 02:58:18', '2020-09-23 02:58:18'),
(8, 'Worker', 1, '2020-09-23 02:58:18', '2020-09-23 02:58:18'),
(9, 'Developer', 1, '2020-09-23 02:58:18', '2020-09-23 02:58:18'),
(10, 'Customer', 1, '2020-09-23 02:58:18', '2020-09-23 02:58:18'),
(11, 'Karigarh', 1, '2020-09-23 02:58:18', '2020-09-23 02:58:18');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint UNSIGNED NOT NULL,
  `transaction_date` date NOT NULL,
  `transaction_number` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ledger_id` bigint UNSIGNED NOT NULL,
  `asset_id` bigint UNSIGNED NOT NULL,
  `voucher_id` bigint UNSIGNED NOT NULL,
  `voucher_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `particulars` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `amount` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `transaction_date`, `transaction_number`, `ledger_id`, `asset_id`, `voucher_id`, `voucher_number`, `particulars`, `user_id`, `amount`, `created_at`, `updated_at`) VALUES
(1, '2020-06-26', 'INC-000001-2021', 1, 1, 1, NULL, NULL, 1, '15000.00', '2020-09-25 02:03:53', '2020-09-25 02:03:53'),
(2, '2020-07-07', 'INC-000002-2021', 1, 1, 1, 'RW02', NULL, 1, '10000.00', '2020-09-25 02:05:08', '2020-09-25 02:05:08'),
(3, '2020-07-07', 'INC-000003-2021', 3, 1, 1, 'RW02', NULL, 1, '1620.00', '2020-09-25 02:06:36', '2020-09-25 02:06:36'),
(4, '2020-07-13', 'INC-000004-2021', 1, 1, 1, 'RW03', NULL, 1, '10000.00', '2020-09-25 02:07:33', '2020-09-25 02:07:33'),
(5, '2020-07-17', 'INC-000005-2021', 1, 1, 1, 'RW04', NULL, 1, '15000.00', '2020-09-25 02:10:07', '2020-09-25 02:10:07'),
(6, '2020-07-27', 'INC-000006-2021', 1, 1, 1, 'RW05', NULL, 1, '15000.00', '2020-09-25 02:10:29', '2020-09-25 02:10:29'),
(7, '2020-07-27', 'INC-000007-2021', 3, 1, 1, NULL, NULL, 1, '460.00', '2020-09-25 02:10:49', '2020-09-25 02:10:49'),
(8, '2020-07-27', 'INC-000008-2021', 1, 1, 1, 'RW05', NULL, 1, '20000.00', '2020-09-25 02:11:11', '2020-09-25 02:11:11'),
(9, '2020-08-14', 'INC-000009-2021', 1, 1, 1, 'RW06', NULL, 1, '15000.00', '2020-09-25 02:11:39', '2020-09-25 02:11:39'),
(10, '2020-08-28', 'INC-000010-2021', 1, 1, 1, 'RW07', NULL, 1, '15000.00', '2020-09-25 02:11:59', '2020-09-25 02:11:59'),
(11, '2020-06-26', 'EXP-000001-2021', 15, 1, 2, 'EXP-car-01', NULL, 1, '2700.00', '2020-09-25 02:16:28', '2020-09-25 02:16:28'),
(12, '2020-06-27', 'EXP-000002-2021', 14, 1, 2, NULL, 'Paid to Ashoke', 1, '400.00', '2020-09-25 02:20:05', '2020-09-25 02:20:05'),
(13, '2020-06-27', 'EXP-000003-2021', 5, 1, 2, NULL, 'Fuel bill paid for owner', 1, '300.00', '2020-09-25 02:21:48', '2020-09-25 02:21:48'),
(14, '2020-06-29', 'EXP-000004-2021', 13, 1, 2, NULL, NULL, 1, '300.00', '2020-09-25 02:22:21', '2020-09-25 02:22:21'),
(15, '2020-06-29', 'EXP-000005-2021', 23, 1, 2, NULL, 'Purchased Soap', 1, '100.00', '2020-09-25 02:23:03', '2020-09-25 02:23:03'),
(16, '2020-06-29', 'EXP-000006-2021', 18, 1, 2, NULL, NULL, 1, '700.00', '2020-09-25 02:24:02', '2020-09-25 02:24:02'),
(17, '2020-06-30', 'EXP-000007-2021', 11, 1, 2, NULL, NULL, 1, '500.00', '2020-09-25 02:26:25', '2020-09-25 02:26:25'),
(18, '2020-07-02', 'EXP-000008-2021', 5, 1, 2, NULL, 'paid to Sushanta Chakraborty', 1, '400.00', '2020-09-25 02:27:21', '2020-09-25 02:27:21'),
(19, '2020-07-03', 'EXP-000009-2021', 15, 1, 2, NULL, NULL, 1, '2600.00', '2020-09-25 02:28:15', '2020-09-25 02:28:15'),
(20, '2020-07-03', 'EXP-000010-2021', 11, 1, 2, NULL, NULL, 1, '349.00', '2020-09-25 02:28:41', '2020-09-25 02:28:41'),
(21, '2020-07-04', 'EXP-000011-2021', 11, 1, 2, NULL, 'Tea, Sugar and Cup', 1, '917.00', '2020-09-25 02:29:19', '2020-09-25 02:29:19'),
(22, '2020-07-04', 'EXP-000012-2021', 22, 1, 2, NULL, 'Gurupurnima Program', 1, '1204.00', '2020-09-25 02:30:04', '2020-09-25 02:30:04'),
(23, '2020-07-06', 'EXP-000013-2021', 11, 1, 2, NULL, NULL, 1, '500.00', '2020-09-25 02:30:27', '2020-09-25 02:30:27'),
(24, '2020-07-06', 'EXP-000014-2021', 10, 1, 2, NULL, NULL, 1, '1000.00', '2020-09-25 02:30:48', '2020-09-25 02:30:48'),
(25, '2020-07-07', 'EXP-000015-2021', 15, 1, 2, NULL, 'Suman Ghosh', 1, '4000.00', '2020-09-25 02:31:25', '2020-09-25 02:31:25'),
(26, '2020-07-07', 'EXP-000016-2021', 5, 1, 2, NULL, 'Shopping', 1, '100.00', '2020-09-25 02:31:57', '2020-09-25 02:31:57'),
(27, '2020-07-09', 'EXP-000017-2021', 23, 1, 2, NULL, 'Sanitizer for COVID-19', 1, '1300.00', '2020-09-25 02:32:38', '2020-09-25 02:32:38'),
(28, '2020-07-10', 'EXP-000018-2021', 15, 1, 2, NULL, 'Surajit Dhara', 1, '3000.00', '2020-09-25 02:33:04', '2020-09-25 02:33:04'),
(29, '2020-07-13', 'EXP-000019-2021', 23, 1, 2, NULL, 'Sanitizer Machine', 1, '3050.00', '2020-09-25 02:33:34', '2020-09-25 02:33:34'),
(30, '2020-07-13', 'EXP-000020-2021', 11, 1, 2, NULL, NULL, 1, '500.00', '2020-09-25 02:33:55', '2020-09-25 02:33:55'),
(31, '2020-07-13', 'EXP-000021-2021', 23, 1, 2, NULL, 'Mask expenditure', 1, '500.00', '2020-09-25 02:34:23', '2020-09-25 02:34:23'),
(32, '2020-07-13', 'EXP-000022-2021', 23, 1, 2, NULL, 'Sanitizer purchase', 1, '1000.00', '2020-09-25 02:34:57', '2020-09-25 02:34:57'),
(33, '2020-07-14', 'EXP-000023-2021', 13, 1, 2, NULL, NULL, 1, '300.00', '2020-09-28 02:41:46', '2020-09-28 02:41:46'),
(34, '2020-07-14', 'EXP-000024-2021', 12, 1, 2, NULL, NULL, 1, '1500.00', '2020-09-28 02:42:55', '2020-09-28 02:42:55'),
(35, '2020-07-14', 'EXP-000025-2021', 29, 1, 2, NULL, 'Costic and Napkin Purchase', 1, '300.00', '2020-09-28 02:43:32', '2020-09-28 02:43:32'),
(36, '2020-07-14', 'EXP-000026-2021', 11, 1, 2, NULL, NULL, 1, '145.00', '2020-09-28 02:43:49', '2020-09-28 02:43:49'),
(37, '2020-07-15', 'EXP-000027-2021', 23, 1, 2, NULL, 'Paid for Mask', 1, '1000.00', '2020-09-28 02:44:46', '2020-09-28 02:44:46'),
(38, '2020-07-16', 'EXP-000028-2021', 15, 1, 2, NULL, NULL, 1, '5532.00', '2020-09-28 02:45:18', '2020-09-28 02:45:18'),
(39, '2020-07-17', 'EXP-000029-2021', 15, 1, 2, NULL, 'Surajit Dhara', 1, '2400.00', '2020-09-28 02:45:49', '2020-09-28 02:45:49'),
(40, '2020-07-18', 'EXP-000030-2021', 23, 1, 2, NULL, 'Paid for Mask', 1, '2000.00', '2020-09-28 02:46:42', '2020-09-28 02:46:42'),
(41, '2020-07-19', 'EXP-000031-2021', 11, 1, 2, NULL, NULL, 1, '270.00', '2020-09-28 02:46:59', '2020-09-28 02:46:59'),
(42, '2020-07-21', 'EXP-000032-2021', 5, 1, 2, NULL, 'paid for Van', 1, '250.00', '2020-09-28 02:47:27', '2020-09-28 02:47:27'),
(43, '2020-07-21', 'EXP-000033-2021', 20, 1, 2, NULL, 'Commercial Gas', 1, '650.00', '2020-09-28 02:47:55', '2020-09-28 02:47:55'),
(44, '2020-07-21', 'EXP-000034-2021', 11, 1, 2, NULL, NULL, 1, '315.00', '2020-09-28 02:48:12', '2020-09-28 02:48:12'),
(45, '2020-07-22', 'EXP-000035-2021', 5, 1, 2, NULL, 'Shopping', 1, '50.00', '2020-09-28 02:48:38', '2020-09-28 02:48:38'),
(46, '2020-07-22', 'EXP-000036-2021', 23, 1, 2, NULL, 'Harpic purchase', 1, '42.00', '2020-09-28 02:49:03', '2020-09-28 02:49:03'),
(47, '2020-07-22', 'EXP-000037-2021', 24, 1, 2, NULL, NULL, 1, '400.00', '2020-09-28 02:49:21', '2020-09-28 02:49:21'),
(48, '2020-07-22', 'EXP-000038-2021', 14, 1, 2, NULL, 'Ashok paid', 1, '200.00', '2020-09-28 02:49:38', '2020-09-28 02:49:38'),
(49, '2020-07-22', 'EXP-000039-2021', 11, 1, 2, NULL, NULL, 1, '130.00', '2020-09-28 02:49:47', '2020-09-28 02:49:47'),
(50, '2020-07-22', 'EXP-000040-2021', 24, 1, 2, NULL, NULL, 1, '400.00', '2020-09-28 02:50:06', '2020-09-28 02:50:06'),
(51, '2020-07-24', 'EXP-000041-2021', 11, 1, 2, NULL, NULL, 1, '145.00', '2020-09-28 02:51:11', '2020-09-28 02:51:11'),
(52, '2020-07-24', 'EXP-000042-2021', 5, 1, 2, NULL, 'Wine', 1, '400.00', '2020-09-28 02:51:36', '2020-09-28 02:51:36'),
(53, '2020-07-27', 'EXP-000043-2021', 13, 1, 2, NULL, NULL, 1, '300.00', '2020-09-28 02:52:01', '2020-09-28 02:52:01'),
(54, '2020-07-27', 'EXP-000044-2021', 27, 1, 2, NULL, NULL, 1, '2000.00', '2020-09-28 02:52:23', '2020-09-28 02:52:23'),
(55, '2020-07-27', 'EXP-000045-2021', 34, 1, 2, NULL, NULL, 1, '596.00', '2020-09-28 02:52:40', '2020-09-28 02:52:40'),
(56, '2020-07-27', 'EXP-000046-2021', 11, 1, 2, NULL, NULL, 1, '280.00', '2020-09-28 02:52:51', '2020-09-28 02:52:51'),
(57, '2020-07-27', 'EXP-000047-2021', 23, 1, 2, NULL, 'Detergent Purchase', 1, '55.00', '2020-09-28 02:53:22', '2020-09-28 02:53:22'),
(58, '2020-07-28', 'EXP-000048-2021', 17, 1, 2, NULL, 'Regulator purchase', 1, '250.00', '2020-09-28 02:54:48', '2020-09-28 02:54:48'),
(59, '2020-07-28', 'EXP-000049-2021', 12, 1, 2, NULL, NULL, 1, '140.00', '2020-09-28 02:55:03', '2020-09-28 02:55:03'),
(78, '2020-07-28', 'EXP-000050-2021', 10, 1, 2, NULL, NULL, 1, '1000.00', '2020-10-07 02:47:43', '2020-10-07 02:47:43'),
(79, '2020-07-28', 'EXP-000051-2021', 24, 1, 2, NULL, NULL, 1, '400.00', '2020-10-07 02:50:14', '2020-10-07 02:50:14'),
(80, '2020-07-31', 'EXP-000052-2021', 23, 1, 2, NULL, 'Paid for Mask', 1, '1000.00', '2020-10-07 02:50:41', '2020-10-07 02:50:41'),
(81, '2020-07-31', 'EXP-000053-2021', 22, 1, 2, NULL, 'donation and Battery', 1, '40.00', '2020-10-07 02:53:20', '2020-10-07 02:53:20'),
(82, '2020-07-31', 'EXP-000054-2021', 5, 1, 2, NULL, 'Shopping', 1, '56.00', '2020-10-07 02:53:45', '2020-10-07 02:53:45'),
(83, '2020-07-31', 'EXP-000055-2021', 15, 1, 2, NULL, 'Surajit Dhara', 1, '2226.00', '2020-10-07 02:54:09', '2020-10-07 02:54:09'),
(84, '2020-08-03', 'EXP-000056-2021', 26, 1, 2, NULL, 'Color brush purchased', 1, '455.00', '2020-10-08 02:26:43', '2020-10-08 02:26:43'),
(85, '2020-08-03', 'EXP-000057-2021', 35, 1, 2, NULL, 'Cartridge refill', 1, '500.00', '2020-10-08 02:29:12', '2020-10-08 02:29:12'),
(86, '2020-08-03', 'EXP-000058-2021', 11, 1, 2, NULL, 'Cup, Kerosine, Battery', 1, '527.00', '2020-10-08 02:30:20', '2020-10-08 02:30:20'),
(87, '2020-08-03', 'EXP-000059-2021', 11, 1, 2, NULL, NULL, 1, '375.00', '2020-10-08 02:30:39', '2020-10-08 02:30:39'),
(88, '2020-08-04', 'EXP-000060-2021', 22, 1, 2, NULL, 'Helmet Purchased', 1, '600.00', '2020-10-08 02:31:47', '2020-10-08 02:31:47'),
(89, '2020-08-04', 'EXP-000061-2021', 24, 1, 2, NULL, NULL, 1, '400.00', '2020-10-08 02:32:02', '2020-10-08 02:32:02'),
(90, '2020-08-04', 'EXP-000062-2021', 5, 1, 2, NULL, 'Shopping', 1, '15.00', '2020-10-08 02:32:54', '2020-10-08 02:32:54'),
(91, '2020-08-06', 'EXP-000063-2021', 20, 1, 2, NULL, NULL, 1, '650.00', '2020-10-08 02:33:30', '2020-10-08 02:33:30'),
(92, '2020-08-06', 'EXP-000064-2021', 11, 1, 2, NULL, NULL, 1, '175.00', '2020-10-08 02:33:47', '2020-10-08 02:33:47'),
(93, '2020-08-06', 'EXP-000065-2021', 36, 1, 2, NULL, 'Subhash Singha Roy', 1, '30.00', '2020-10-08 02:35:41', '2020-10-08 02:35:41'),
(94, '2020-08-07', 'EXP-000066-2021', 37, 1, 2, NULL, 'Dutta Babu', 1, '2000.00', '2020-10-08 02:38:37', '2020-10-08 02:38:37'),
(95, '2020-08-07', 'EXP-000067-2021', 11, 1, 2, NULL, NULL, 1, '175.00', '2020-10-08 02:38:55', '2020-10-08 02:38:55'),
(96, '2020-08-07', 'EXP-000068-2021', 28, 1, 2, NULL, 'Bulb Purchased', 1, '30.00', '2020-10-08 02:39:29', '2020-10-08 02:39:29'),
(97, '2020-08-10', 'EXP-000069-2021', 13, 1, 2, NULL, NULL, 1, '300.00', '2020-10-08 02:39:46', '2020-10-08 02:39:46'),
(98, '2020-08-10', 'EXP-000070-2021', 20, 1, 2, NULL, 'two gasses', 1, '2460.00', '2020-10-08 02:40:12', '2020-10-08 02:40:12'),
(99, '2020-08-10', 'EXP-000071-2021', 15, 1, 2, NULL, 'Suman', 1, '2919.00', '2020-10-08 02:40:30', '2020-10-08 02:40:30'),
(100, '2020-08-10', 'EXP-000072-2021', 11, 1, 2, NULL, 'Tea, Sugar', 1, '475.00', '2020-10-08 02:41:05', '2020-10-08 02:41:05'),
(101, '2020-08-11', 'EXP-000073-2021', 38, 1, 2, NULL, NULL, 1, '450.00', '2020-10-08 02:42:17', '2020-10-08 02:42:17'),
(102, '2020-08-12', 'EXP-000074-2021', 30, 1, 2, NULL, NULL, 1, '6526.00', '2020-10-08 02:42:49', '2020-10-08 02:42:49'),
(103, '2020-08-12', 'EXP-000075-2021', 24, 1, 2, NULL, 'Bala and travelling expenditure', 1, '940.00', '2020-10-08 02:43:21', '2020-10-08 02:43:21'),
(104, '2020-08-12', 'EXP-000076-2021', 6, 1, 2, NULL, NULL, 1, '11184.00', '2020-10-08 02:43:45', '2020-10-08 02:43:45'),
(105, '2020-08-12', 'EXP-000077-2021', 15, 1, 2, NULL, 'Surajit Dhara', 1, '2400.00', '2020-10-08 02:44:01', '2020-10-08 02:44:01'),
(106, '2020-08-12', 'EXP-000078-2021', 28, 1, 2, NULL, 'Sagar Nil Das', 1, '1750.00', '2020-10-08 02:44:19', '2020-10-08 02:44:19'),
(107, '2020-08-14', 'EXP-000079-2021', 39, 1, 2, NULL, NULL, 1, '2689.00', '2020-10-08 02:45:56', '2020-10-08 02:45:56'),
(108, '2020-08-14', 'EXP-000080-2021', 18, 1, 2, NULL, NULL, 1, '51.00', '2020-10-08 02:47:20', '2020-10-08 02:47:20'),
(109, '2020-08-14', 'EXP-000081-2021', 24, 1, 2, NULL, NULL, 1, '400.00', '2020-10-08 02:48:09', '2020-10-08 02:48:09'),
(110, '2020-08-15', 'EXP-000082-2021', 23, 1, 2, NULL, 'Hand Wash', 1, '195.00', '2020-10-08 02:48:39', '2020-10-08 02:48:39'),
(111, '2020-08-15', 'EXP-000083-2021', 14, 1, 2, NULL, 'Ashok Van', 1, '300.00', '2020-10-08 02:50:05', '2020-10-08 02:50:05'),
(112, '2020-08-15', 'EXP-000084-2021', 36, 1, 2, NULL, 'Satya manna', 1, '20.00', '2020-10-08 02:50:38', '2020-10-08 02:50:38'),
(113, '2020-08-17', 'EXP-000085-2021', 11, 1, 2, NULL, NULL, 1, '180.00', '2020-10-08 02:50:55', '2020-10-08 02:50:55'),
(114, '2020-08-18', 'EXP-000086-2021', 5, 1, 2, NULL, 'Shopping', 1, '65.00', '2020-10-08 02:51:13', '2020-10-08 02:51:13'),
(115, '2020-08-18', 'EXP-000087-2021', 11, 1, 2, NULL, NULL, 1, '60.00', '2020-10-08 02:51:28', '2020-10-08 02:51:28'),
(116, '2020-08-19', 'EXP-000088-2021', 5, 1, 2, NULL, 'Gift to children', 1, '150.00', '2020-10-08 02:52:01', '2020-10-08 02:52:01'),
(117, '2020-08-19', 'EXP-000089-2021', 11, 1, 2, NULL, NULL, 1, '160.00', '2020-10-08 02:52:12', '2020-10-08 02:52:12'),
(118, '2020-08-22', 'EXP-000090-2021', 10, 1, 2, NULL, NULL, 1, '165.00', '2020-10-08 02:52:31', '2020-10-08 02:52:31'),
(119, '2020-08-22', 'EXP-000091-2021', 15, 1, 2, NULL, 'Surajit Dhara', 1, '2200.00', '2020-10-08 02:52:45', '2020-10-08 02:52:45'),
(120, '2020-08-24', 'EXP-000092-2021', 13, 1, 2, NULL, NULL, 1, '300.00', '2020-10-08 02:52:58', '2020-10-08 02:52:58'),
(121, '2020-08-24', 'EXP-000093-2021', 11, 1, 2, NULL, NULL, 1, '383.00', '2020-10-08 02:53:12', '2020-10-08 02:53:12'),
(122, '2020-08-24', 'EXP-000094-2021', 34, 1, 2, NULL, NULL, 1, '513.00', '2020-10-08 02:53:32', '2020-10-08 02:53:32'),
(123, '2020-08-25', 'EXP-000095-2021', 5, 1, 2, NULL, 'Soil for gardening', 1, '750.00', '2020-10-08 02:54:20', '2020-10-08 02:54:20'),
(124, '2020-08-25', 'EXP-000096-2021', 24, 1, 2, NULL, 'charge and travelling', 1, '820.00', '2020-10-08 02:54:40', '2020-10-08 02:54:40'),
(125, '2020-08-25', 'EXP-000097-2021', 11, 1, 2, NULL, NULL, 1, '160.00', '2020-10-08 02:54:48', '2020-10-08 02:54:48'),
(126, '2020-08-25', 'EXP-000098-2021', 40, 1, 2, NULL, 'With travelling expenses', 1, '370.00', '2020-10-08 02:56:02', '2020-10-08 02:56:02'),
(127, '2020-08-25', 'EXP-000099-2021', 10, 1, 2, NULL, NULL, 1, '500.00', '2020-10-08 02:56:16', '2020-10-08 02:56:16'),
(128, '2020-08-25', 'EXP-000100-2021', 10, 1, 2, NULL, NULL, 1, '1000.00', '2020-10-08 02:56:32', '2020-10-08 02:56:32'),
(129, '2020-08-26', 'EXP-000101-2021', 23, 1, 2, NULL, NULL, 1, '1300.00', '2020-10-08 02:56:54', '2020-10-08 02:56:54'),
(130, '2020-08-26', 'EXP-000102-2021', 11, 1, 2, NULL, NULL, 1, '250.00', '2020-10-08 02:57:05', '2020-10-08 02:57:05'),
(131, '2020-08-28', 'EXP-000103-2021', 39, 1, 2, NULL, NULL, 1, '750.00', '2020-10-08 02:57:32', '2020-10-08 02:57:32'),
(132, '2020-08-28', 'EXP-000104-2021', 41, 1, 2, NULL, NULL, 1, '2200.00', '2020-10-08 02:58:29', '2020-10-08 02:58:29'),
(133, '2020-08-28', 'EXP-000105-2021', 15, 1, 2, NULL, 'Surajit Dhara', 1, '2100.00', '2020-10-08 02:58:48', '2020-10-08 02:58:48'),
(134, '2020-08-28', 'EXP-000106-2021', 11, 1, 2, NULL, NULL, 1, '60.00', '2020-10-08 02:58:57', '2020-10-08 02:58:57'),
(135, '2020-08-28', 'EXP-000107-2021', 5, 1, 2, NULL, 'Shopping', 1, '25.00', '2020-10-08 02:59:14', '2020-10-08 02:59:14'),
(136, '2020-08-28', 'EXP-000108-2021', 11, 1, 2, NULL, 'Cup Purchase', 1, '200.00', '2020-10-08 02:59:39', '2020-10-08 02:59:39'),
(137, '2020-09-03', 'EXP-000109-2021', 11, 1, 2, NULL, NULL, 1, '270.00', '2020-10-09 02:21:29', '2020-10-09 02:21:29'),
(138, '2020-09-04', 'EXP-000110-2021', 15, 1, 2, NULL, 'Surajit dhara', 1, '2500.00', '2020-10-09 02:21:53', '2020-10-09 02:21:53'),
(139, '2020-09-04', 'EXP-000111-2021', 24, 1, 2, NULL, 'with travelling', 1, '240.00', '2020-10-09 02:22:28', '2020-10-09 02:22:28'),
(140, '2020-09-04', 'EXP-000112-2021', 20, 1, 2, NULL, '3 gasses', 1, '3090.00', '2020-10-09 02:24:12', '2020-10-09 02:24:12'),
(141, '2020-09-04', 'EXP-000113-2021', 39, 1, 2, NULL, 'Sagar Nil Das', 1, '696.00', '2020-10-09 02:24:33', '2020-10-09 02:24:33'),
(142, '2020-09-04', 'EXP-000114-2021', 42, 1, 2, NULL, 'Flower purchased for program', 1, '5050.00', '2020-10-09 02:26:05', '2020-10-09 02:26:05'),
(143, '2020-09-08', 'EXP-000115-2021', 43, 1, 2, NULL, 'With travelling', 1, '3173.00', '2020-10-09 02:33:22', '2020-10-09 02:33:22'),
(144, '2020-09-08', 'EXP-000116-2021', 44, 1, 2, NULL, NULL, 1, '300.00', '2020-10-09 02:34:52', '2020-10-09 02:34:52'),
(145, '2020-09-08', 'EXP-000117-2021', 11, 1, 2, NULL, NULL, 1, '160.00', '2020-10-09 02:35:06', '2020-10-09 02:35:06'),
(146, '2020-09-09', 'EXP-000118-2021', 24, 1, 2, NULL, NULL, 1, '1400.00', '2020-10-09 02:35:35', '2020-10-09 02:35:35'),
(147, '2020-09-09', 'EXP-000119-2021', 11, 1, 2, NULL, NULL, 1, '240.00', '2020-10-09 02:35:47', '2020-10-09 02:35:47'),
(148, '2020-09-09', 'EXP-000120-2021', 24, 1, 2, NULL, NULL, 1, '1000.00', '2020-10-09 02:36:10', '2020-10-09 02:36:10'),
(149, '2020-09-10', 'EXP-000121-2021', 11, 1, 2, NULL, NULL, 1, '370.00', '2020-10-09 02:36:29', '2020-10-09 02:36:29'),
(150, '2020-09-10', 'EXP-000122-2021', 24, 1, 2, NULL, NULL, 1, '1000.00', '2020-10-09 02:36:41', '2020-10-09 02:36:41'),
(151, '2020-09-12', 'EXP-000123-2021', 11, 1, 2, NULL, NULL, 1, '60.00', '2020-10-09 02:36:57', '2020-10-09 02:36:57'),
(152, '2020-09-14', 'EXP-000124-2021', 13, 1, 2, NULL, NULL, 1, '300.00', '2020-10-09 02:37:08', '2020-10-09 02:37:08'),
(153, '2020-09-14', 'EXP-000125-2021', 22, 1, 2, NULL, 'Sweet Purchased', 1, '80.00', '2020-10-09 02:37:32', '2020-10-09 02:37:32'),
(154, '2020-09-14', 'EXP-000126-2021', 45, 1, 2, NULL, 'Plumber paid', 1, '300.00', '2020-10-09 02:38:54', '2020-10-09 02:38:54'),
(155, '2020-09-15', 'EXP-000127-2021', 9, 1, 2, NULL, NULL, 1, '3265.00', '2020-10-09 02:39:35', '2020-10-09 02:39:35'),
(156, '2020-09-15', 'EXP-000128-2021', 14, 1, 2, NULL, 'Ashok', 1, '300.00', '2020-10-09 02:39:49', '2020-10-09 02:39:49'),
(157, '2020-09-15', 'EXP-000129-2021', 5, 1, 2, NULL, 'Material purchased for woner', 1, '4516.00', '2020-10-09 02:40:21', '2020-10-09 02:40:21'),
(158, '2020-09-15', 'EXP-000130-2021', 11, 1, 2, NULL, NULL, 1, '350.00', '2020-10-09 02:40:44', '2020-10-09 02:40:44'),
(159, '2020-09-15', 'EXP-000131-2021', 41, 1, 2, NULL, 'Calculator Purchased', 1, '340.00', '2020-10-09 02:41:09', '2020-10-09 02:41:09'),
(160, '2020-09-15', 'EXP-000132-2021', 9, 1, 2, NULL, 'Flower Purchased', 1, '1900.00', '2020-10-09 02:41:27', '2020-10-09 02:41:27'),
(161, '2020-09-15', 'EXP-000133-2021', 5, 1, 2, NULL, 'Wine Purchased', 1, '1120.00', '2020-10-09 02:41:52', '2020-10-09 02:41:52'),
(162, '2020-09-15', 'EXP-000134-2021', 9, 1, 2, NULL, 'Sweets', 1, '500.00', '2020-10-09 02:42:05', '2020-10-09 02:42:05'),
(163, '2020-09-16', 'EXP-000135-2021', 20, 1, 2, NULL, NULL, 1, '650.00', '2020-10-09 02:42:26', '2020-10-09 02:42:26'),
(164, '2020-09-16', 'EXP-000136-2021', 9, 1, 2, NULL, NULL, 1, '2949.00', '2020-10-09 02:44:20', '2020-10-09 02:44:20'),
(165, '2020-09-16', 'EXP-000137-2021', 9, 1, 2, NULL, NULL, 1, '1400.00', '2020-10-09 02:44:35', '2020-10-09 02:44:35'),
(166, '2020-09-21', 'EXP-000138-2021', 15, 1, 2, NULL, 'Surajit Dhara', 1, '2100.00', '2020-10-09 02:44:59', '2020-10-09 02:44:59'),
(167, '2020-09-21', 'EXP-000139-2021', 11, 1, 2, NULL, NULL, 1, '298.00', '2020-10-09 02:45:16', '2020-10-09 02:45:16'),
(168, '2020-09-21', 'EXP-000140-2021', 10, 1, 2, NULL, NULL, 1, '1000.00', '2020-10-09 02:45:28', '2020-10-09 02:45:28'),
(169, '2020-09-21', 'EXP-000141-2021', 46, 1, 2, NULL, NULL, 1, '2480.00', '2020-10-09 02:48:19', '2020-10-09 02:48:19'),
(170, '2020-09-21', 'EXP-000142-2021', 9, 1, 2, NULL, 'Sweet', 1, '200.00', '2020-10-09 02:48:34', '2020-10-09 02:48:34'),
(171, '2020-09-22', 'EXP-000143-2021', 11, 1, 2, NULL, NULL, 1, '202.00', '2020-10-09 02:49:10', '2020-10-09 02:49:10'),
(172, '2020-09-22', 'EXP-000144-2021', 22, 1, 2, NULL, 'Drawing Copy', 1, '60.00', '2020-10-09 02:49:45', '2020-10-09 02:49:45'),
(173, '2020-09-22', 'EXP-000145-2021', 9, 1, 2, NULL, 'Milk', 1, '47.00', '2020-10-09 02:50:01', '2020-10-09 02:50:01'),
(174, '2020-09-23', 'EXP-000146-2021', 11, 1, 2, NULL, NULL, 1, '282.00', '2020-10-09 02:50:20', '2020-10-09 02:50:20'),
(175, '2020-09-23', 'EXP-000147-2021', 18, 1, 2, NULL, NULL, 1, '70.00', '2020-10-09 02:50:33', '2020-10-09 02:50:33'),
(176, '2020-09-23', 'EXP-000148-2021', 13, 1, 2, NULL, NULL, 1, '300.00', '2020-10-09 02:50:44', '2020-10-09 02:50:44'),
(177, '2020-09-25', 'EXP-000149-2021', 34, 1, 2, NULL, NULL, 1, '440.00', '2020-10-09 02:50:59', '2020-10-09 02:50:59'),
(178, '2020-09-25', 'EXP-000150-2021', 11, 1, 2, NULL, NULL, 1, '241.00', '2020-10-09 02:51:10', '2020-10-09 02:51:10'),
(179, '2020-09-26', 'EXP-000151-2021', 15, 1, 2, NULL, 'Samiran Mazumder', 1, '5000.00', '2020-10-09 02:51:37', '2020-10-09 02:51:37'),
(180, '2020-09-26', 'EXP-000152-2021', 11, 1, 2, NULL, NULL, 1, '190.00', '2020-10-09 02:51:48', '2020-10-09 02:51:48'),
(181, '2020-09-28', 'EXP-000153-2021', 13, 1, 2, NULL, NULL, 1, '300.00', '2020-10-09 02:52:01', '2020-10-09 02:52:01'),
(182, '2020-09-28', 'EXP-000154-2021', 11, 1, 2, NULL, NULL, 1, '317.00', '2020-10-09 02:52:14', '2020-10-09 02:52:14'),
(183, '2020-09-29', 'EXP-000155-2021', 20, 1, 2, NULL, NULL, 1, '650.00', '2020-10-09 02:52:27', '2020-10-09 02:52:27'),
(184, '2020-09-29', 'EXP-000156-2021', 11, 1, 2, NULL, NULL, 1, '360.00', '2020-10-09 02:52:45', '2020-10-09 02:52:45'),
(185, '2020-09-30', 'EXP-000157-2021', 5, 1, 2, NULL, 'Gardening', 1, '1500.00', '2020-10-09 02:53:04', '2020-10-09 02:53:04'),
(186, '2020-09-30', 'EXP-000158-2021', 28, 1, 2, NULL, NULL, 1, '1150.00', '2020-10-09 02:53:20', '2020-10-09 02:53:20'),
(187, '2020-09-30', 'EXP-000159-2021', 5, 1, 2, NULL, 'wine', 1, '1120.00', '2020-10-09 02:53:35', '2020-10-09 02:53:35'),
(188, '2020-09-30', 'EXP-000160-2021', 11, 1, 2, NULL, NULL, 1, '193.00', '2020-10-09 02:53:44', '2020-10-09 02:53:44'),
(189, '2020-09-30', 'EXP-000161-2021', 39, 1, 2, NULL, NULL, 1, '30.00', '2020-10-09 02:54:06', '2020-10-09 02:54:06'),
(190, '2020-09-04', 'INC-000011-2021', 1, 1, 1, NULL, NULL, 1, '10000.00', '2020-10-09 02:55:39', '2020-10-09 02:55:39'),
(191, '2020-09-15', 'INC-000012-2021', 1, 1, 1, NULL, NULL, 1, '15000.00', '2020-10-09 02:55:54', '2020-10-09 02:55:54'),
(192, '2020-09-21', 'INC-000013-2021', 1, 1, 1, NULL, NULL, 1, '5000.00', '2020-10-09 02:56:09', '2020-10-09 02:56:09'),
(193, '2020-09-21', 'INC-000014-2021', 1, 1, 1, NULL, NULL, 1, '5000.00', '2020-10-09 02:56:22', '2020-10-09 02:56:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `person_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile1` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile2` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `person_type_id` bigint UNSIGNED NOT NULL,
  `address1` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address2` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT 'West Bengal',
  `po` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `area` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pin` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `inforced` tinyint NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `person_name`, `email`, `password`, `remember_token`, `mobile1`, `mobile2`, `person_type_id`, `address1`, `address2`, `state`, `po`, `area`, `city`, `pin`, `inforced`, `created_at`, `updated_at`) VALUES
(1, 'Arindam Biswas', 'arindam', '$2y$10$Ll8qC5v9hJqgEFwLpWVRc.4E3VNkpD2VRtYP831KSRMQaJeTMVgfu', NULL, '9836444999', '', 1, NULL, NULL, 'West Bengal', NULL, NULL, NULL, NULL, 1, '2020-09-23 02:58:18', '2020-09-23 02:58:18'),
(2, 'Abishek Basak', 'bangle396@gmail.com', '$2y$10$XisJJGyDkL/HGB0p4NZ0pe.klKGqzmxd8rVUtS6.pY2cKT4qQv3vu', NULL, '9836444451', '', 7, NULL, NULL, 'West Bengal', NULL, NULL, NULL, NULL, 1, '2020-09-23 02:58:18', '2020-09-23 02:58:18');

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `id` bigint UNSIGNED NOT NULL,
  `voucher_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vouchers`
--

INSERT INTO `vouchers` (`id`, `voucher_name`, `created_at`, `updated_at`) VALUES
(1, 'Receipt', '2020-09-23 02:58:21', '2020-09-23 02:58:21'),
(2, 'Payment', '2020-09-23 02:58:21', '2020-09-23 02:58:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assets`
--
ALTER TABLE `assets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `custom_vouchers`
--
ALTER TABLE `custom_vouchers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `custom_vouchers_voucher_name_accounting_year_unique` (`voucher_name`,`accounting_year`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ledgers`
--
ALTER TABLE `ledgers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ledgers_ledger_type_id_foreign` (`ledger_type_id`);

--
-- Indexes for table `ledger_types`
--
ALTER TABLE `ledger_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `person_types`
--
ALTER TABLE `person_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_ledger_id_foreign` (`ledger_id`),
  ADD KEY `transactions_asset_id_foreign` (`asset_id`),
  ADD KEY `transactions_voucher_id_foreign` (`voucher_id`),
  ADD KEY `transactions_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_person_type_id_foreign` (`person_type_id`);

--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assets`
--
ALTER TABLE `assets`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `custom_vouchers`
--
ALTER TABLE `custom_vouchers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ledgers`
--
ALTER TABLE `ledgers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `ledger_types`
--
ALTER TABLE `ledger_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `person_types`
--
ALTER TABLE `person_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=194;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ledgers`
--
ALTER TABLE `ledgers`
  ADD CONSTRAINT `ledgers_ledger_type_id_foreign` FOREIGN KEY (`ledger_type_id`) REFERENCES `ledger_types` (`id`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_asset_id_foreign` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`),
  ADD CONSTRAINT `transactions_ledger_id_foreign` FOREIGN KEY (`ledger_id`) REFERENCES `ledgers` (`id`),
  ADD CONSTRAINT `transactions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `transactions_voucher_id_foreign` FOREIGN KEY (`voucher_id`) REFERENCES `vouchers` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_person_type_id_foreign` FOREIGN KEY (`person_type_id`) REFERENCES `person_types` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
