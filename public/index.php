<?php

//Website variables
$websiteData = [
    'siteURL' => 'https://www.parking4less.com/flying-with-a-disability',
    'siteName' => 'Parking4Less',
    'ogImage' => ''
];

//Page variables
$pageData = [
    'pageTitle' => 'Parking4Less - A full guide to flying with a disability',
    'pageDescription' => 'In this guide, we’ll discuss everything you can do to make planning your holiday easier. From the flights themselves, to staying safe while you’re away, this is your one-stop-shop for accessible travel advice. ',
];

?>

<!DOCTYPE html>
<html class="no-js" lang="en_GB"> 
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo ($pageData['pageTitle']); ?></title>
    <meta name="description" content="<?php echo ($pageData['pageDescription']); ?>">
    <link rel="canonical" href="<?php echo ($websiteData['siteURL']); ?>" />
    <!-- Open Graph -->
    <meta property="og:locale" content="en_GB">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?php echo ($pageData['pageTitle']); ?>">
    <meta property="og:description" content="<?php echo ($pageData['pageDescription']); ?>">
    <meta property="og:url" content="<?php echo ($websiteData['siteURL']); ?>">
    <meta property="og:site_name" content="<?php echo ($websiteData['siteName']); ?>">
    <meta property="og:image" content="<?php echo ($websiteData['ogImage']); ?>">
    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:description" content="<?php echo ($pageData['pageDescription']); ?>">
    <meta name="twitter:title" content="<?php echo ($pageData['pageTitle']); ?>">
    <meta name="twitter:image" content="<?php echo ($websiteData['ogImage']); ?>">
    <!-- CSS -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/app.css">
    <!-- Favicon -->
    <link rel="shortcut icon" href="https://www.parking4less.com/favicon.ico" type="image/x-icon">
    <link rel="icon" href="https://www.parking4less.com/favicon.ico" type="image/x-icon">
</head>
<body>
    <!--[if lte IE 9]>
        <div class="outdated-browser">
            <h2>You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</h2>
        </div>
    <![endif]-->
<main>
    <?php include_once('partials/hero.php') ?>
    <?php include_once('partials/accessible.php') ?>
    <?php include_once('partials/flying.php') ?>
    <?php include_once('partials/enjoying.php') ?>
    <?php include_once('partials/medical.php') ?>
    <?php include_once('partials/faqs.php') ?>
</main>
    <?php include_once('partials/footer.php') ?>
</body>
</html>