---
category: code
tags:
  - php
  - doctrine
  - mysql
date: 2014-06-07
title: Adding custom mapping types in doctrine
---
While working in some enhancements in one of my projects, I had an issue with doctrine not recognising the mysql data type “blob“.

<!-- more -->
The error I was getting while running doctrine diff was :

``` 
[Doctrine\DBAL\DBALException]
Unknown database type blob requested, Doctrine\DBAL\Platforms\MySqlPlatform may not support it.
```
In order to overcome the issue, I had to add the blob data type to doctrine.

### Step 1 :

Creating a class to handle the blob type.

path : Doctrine/DBAL/Types/BlobType.php

with content 

```php 
<!--?php
namespace Doctrine\DBAL\Types;
use Doctrine\DBAL\Platforms\AbstractPlatform;

/**
 * Type that maps a database BLOB to an encoded base64 value
 *
 * @author Ahmed
 *        
 */
class BlobType extends Type
{

    public function getName ()
    {
        return TYPE::BLOB;
    }

    public function getSQLDeclaration (array $fieldDeclaration,
            AbstractPlatform $platform)
    {
        return $platform-&gt;getDoctrineTypeMapping('BLOB');
    }

    public function convertToDatabaseValue ($value, AbstractPlatform $platform)
    {
        return ($value === null) ? null : base64_encode($value);
    }

    public function convertToPHPValue ($value, AbstractPlatform $platform)
    {
        return ($value === null) ? null : base64_decode($value);
    }
}
```
### Step 2: 

Add the blob type name to the Type abstract class

File Path : Doctrine/DBAL/Types/Type.php

```php 
    const BLOB = 'blob';
```

### Step 3: 
Modify the DoctrineTypeMappings for mysql

File Path: Doctrine/DBAL/Platforms/MySqlPlatform.php

Append the blob type to the end of the array, ex :

```php 
<?php
protected function initializeDoctrineTypeMappings()
{
    $this->doctrineTypeMapping = array(
        'tinyint' => 'boolean',
        'smallint' => 'smallint',
        'mediumint' => 'integer',
        'int' => 'integer',
        'integer' => 'integer',
        'bigint' => 'bigint',
        'tinytext' => 'text',
        'mediumtext' => 'text',
        'longtext' => 'text',
        'text' => 'text',
        'varchar' => 'string',
        'string' => 'string',
        'char' => 'string',
        'date' => 'date',
        'datetime' => 'datetime',
        'timestamp' => 'datetime',
        'time' => 'time',
        'float' => 'float',
        'double' => 'float',
        'real' => 'float',
        'decimal' => 'decimal',
        'numeric' => 'decimal',
        'year' => 'date',
        'blob' => 'blob'
    );
}
?>
```
now doctrine will be able to recognise the mysql data type blob.

the documentation here was helpful in some steps above : [Custom Mapping Types](https://www.doctrine-project.org/projects/doctrine-orm/en/latest/cookbook/custom-mapping-types.html)
