<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitccb1f09bc9b55c936be3fb0d10dbd8b1
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitccb1f09bc9b55c936be3fb0d10dbd8b1', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitccb1f09bc9b55c936be3fb0d10dbd8b1', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitccb1f09bc9b55c936be3fb0d10dbd8b1::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}