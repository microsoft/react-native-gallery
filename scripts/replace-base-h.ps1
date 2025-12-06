#!/usr/bin/env pwsh

# Script to download original React Native Base.h and replace react-native-windows version
# This ensures C++20 features are replaced with C++17 compatible code

$ErrorActionPreference = "Stop"

Write-Host "Downloading original React Native Base.h file..." -ForegroundColor Yellow

$sourceUrl = "https://raw.githubusercontent.com/facebook/react-native/e6848ba5ba997d102cbaf6181c7c8c73e25a0827/packages/react-native/ReactCommon/react/bridging/Base.h"
$targetPath = "node_modules\react-native-windows\Microsoft.ReactNative.Cxx\ReactCommon\react\bridging\Base.h"

try {
    # Check if target directory exists
    $targetDir = Split-Path $targetPath -Parent
    if (-not (Test-Path $targetDir)) {
        Write-Host "Target directory does not exist: $targetDir" -ForegroundColor Red
        Write-Host "This script should run after react-native-windows is installed." -ForegroundColor Red
        exit 1
    }

    # Download the original file
    Write-Host "Downloading from: $sourceUrl" -ForegroundColor Green
    $response = Invoke-WebRequest -Uri $sourceUrl -UseBasicParsing
    
    if ($response.StatusCode -eq 200) {
        # Create backup of existing file
        $backupPath = $targetPath + ".backup"
        if (Test-Path $targetPath) {
            Copy-Item $targetPath $backupPath -Force
            Write-Host "Created backup at: $backupPath" -ForegroundColor Blue
        }
        
        # Write the downloaded content to target file
        $response.Content | Set-Content $targetPath -Encoding UTF8
        Write-Host "Successfully replaced Base.h with original React Native version" -ForegroundColor Green
        Write-Host "Target file: $targetPath" -ForegroundColor Green
        
        # Apply C++17 compatibility fixes
        Write-Host "Applying C++17 compatibility fixes..." -ForegroundColor Yellow
        
        $content = Get-Content $targetPath -Raw
        
        # Replace C++20 requires clauses with C++17 std::enable_if_t
        $content = $content -replace 'template <typename ReturnT, typename JSArgT>\s+requires is_jsi_v<JSArgT>', 'template <typename R, typename T, std::enable_if_t<is_jsi_v<T>, int> = 0>'
        $content = $content -replace 'template <typename T>\s+requires is_jsi_v<T>', 'template <typename T, std::enable_if_t<is_jsi_v<T>, int> = 0>'
        
        # Replace long parameter names with shorter ones
        $content = $content -replace 'typename ClassT, typename ReturnT, typename\.\.\. ArgsT', 'typename C, typename R, typename... Args'
        $content = $content -replace 'ReturnT \(ClassT::\*\)\(ArgsT\.\.\.\)', 'R (C::*)(Args...)'
        $content = $content -replace 'std::function<ReturnT\(ArgsT\.\.\.\)>', 'std::function<R(Args...)>'
        $content = $content -replace 'typename ReturnT, typename JSArgT', 'typename R, typename T'
        $content = $content -replace 'JSArgT&&', 'T&&'
        $content = $content -replace 'ReturnT>', 'R>'
        $content = $content -replace 'JSArgT>', 'T>'
        $content = $content -replace 'std::forward<JSArgT>', 'std::forward<T>'
        $content = $content -replace '/\*unused\*/', ''
        $content = $content -replace 'typename JSReturnT, typename ReturnT', 'typename T, typename Ret'
        $content = $content -replace 'JSReturnT>', 'T>'
        $content = $content -replace 'ReturnT>;', 'Ret>;'
        $content = $content -replace 'std::declval<JSReturnT>\(\)', 'std::declval<T>()'
        $content = $content -replace 'std::declval<ReturnT>\(\)', 'std::declval<T>()'
        
        # Clean up extra whitespace and format
        $content = $content -replace '\n\n\{\s*\n', ' {\n'
        $content = $content -replace 'auto fromJs\(\s+jsi::Runtime& rt,\s+T&& value,\s+const std::shared_ptr<CallInvoker>&\)\s+-> decltype', 'auto fromJs(jsi::Runtime& rt, T&& value, const std::shared_ptr<CallInvoker>&)
    -> decltype'
        
        Set-Content $targetPath $content -Encoding UTF8
        Write-Host "Applied C++17 compatibility fixes successfully" -ForegroundColor Green
        
    } else {
        Write-Host "Failed to download file. HTTP Status: $($response.StatusCode)" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "Error occurred: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host "Base.h replacement completed successfully!" -ForegroundColor Green