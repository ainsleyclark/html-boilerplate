<?php

//Website variables
$websiteData = [
    'siteURL' => '',
    'siteName' => '',
    'logo' => '',
    'ogImage' => $websiteData['siteURL'] . '',
    'telephone' => '0000000000',
    'social' => [
        'twitter' => 'twitter.com',
        'facebook' => 'facebook.com',
        'linkedin' => 'linkedin.com',
    ],
];

//Page variables
$pageData = [
    'pageTitle' => '',
    'pageDescription' => '',
];

?>

<!DOCTYPE html>
<html class="no-js" lang="en_GB"> 
<head>
    <!-- No index // Server name example 'igamingseo.com' -->
    <?php if ($_SERVER['SERVER_NAME'] !== 'WEBSITE HERE') { ?>
        <meta name="robots" content="noindex">
    <?php } ?>
    <meta name="robots" content="noindex">
    <!-- Meta -->
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
    <link rel="stylesheet" href="<?php echo ($websiteData['siteURL']); ?>/css/app.css">
    <!-- Preload JS -->
    <link rel="preload" href="/js/app.js" as="script">
    <!-- Schema - Organisation -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "<?php echo ($websiteData['siteURL']); ?>",
            "url": "<?php echo ($websiteData['siteName']); ?>",
            "logo": "<?php echo ($websiteData['logo']); ?>",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "<?php echo ($websiteData['telephone']); ?>",
                    "contactType": "sales",
                    "contactOption": null,
                    "areaServed": null
                }
            ],
            "sameAs": [
                <?php
                    foreach ($websiteData['social'] as $socialKey => $socialAddress) {
                        echo '"' . $socialAddress . '"' . PHP_EOL;
                        if ($socialKey !== array_key_last($websiteData['social'])) {
                            echo ',';
                        }
                    }
                ?>
            ]
        }
    </script>
    <!-- Favicon -->

    <!-- Google Analytics -->
    <?php if ($_SERVER['SERVER_NAME'] !== 'WEBSITE HERE') { ?>
    
    <?php } ?>
</head>
<body>
    <!--[if lte IE 9]>
        <div class="outdated-browser">
            <h2>You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</h2>
        </div>
    <![endif]-->
    <?php include_once('partials/header.php') ?>
<main>
    <?php
        include_once('sections/home.php');
        include_once('sections/section.php');
    ?>
</main>
    <?php include_once('partials/footer.php') ?>
    <!-- Javascript -->
    <script src="<?php echo ($websiteData['siteURL']); ?>/js/app.js"></script>
    <!-- Google Transition Fix -->
    <script> </script>
</body>
</html>