//
//  ViewController.swift
//  ar-poi-ios
//
//  Created by Imam Bux  on 02.02.18.
//  Copyright © 2018 Imam Bux . All rights reserved.
//

import UIKit

class ViewController: UIViewController, WTArchitectViewDelegate {
    
    fileprivate var architectView:WTArchitectView?
    fileprivate var architectWorldNavigation:WTNavigation?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        do {
            try WTArchitectView.isDeviceSupported(forRequiredFeatures: WTFeatures.imageTracking)
            architectView = WTArchitectView(frame: self.view.frame)
            architectView?.requiredFeatures = .imageTracking
            architectView?.delegate = self
            architectView?.setLicenseKey("pb/7GYy11WmR9k6OP3HrKQA1jZ8fUSgaG/Izg+b/O5gX7vj6pBa2Lw6IPm6z2cP49XA8aNz6NGeUV2/vpI9fhb4kiCso8jm4hCv0ce33j1RHJOKuo4fKS4iNclzk1+fzJcatZDJzAvmDX7H4GaeNWvBOt11B0eveSEos3ZG9QBhTYWx0ZWRfXwEIAq5fxO/X7x4IxJg/CiCveugQZwPWaaVwa3GX0vEH+S2XrUaOE6vAJJeZ6Tt4URPfxPsIn+amocERTbc+L7NADVvUBYOuZOQnWdFTLVkK+2I9Du69VnV7cZhRlwvmIICKoDQk1c3o/GlKqrtqZFxZkSJWVWgXxLXdjnxJ9CYsV+ooo1isJrxpV757CTRajtmAIcvuTHjs8ICsfFykCSe3CA+EBmq9EJrddXWLV4OIIw8lEpwqmA73jFrHaYqA2os/BhBqw+MAo1fSb1obWQC/G5HyRqjLhJu/P6d8gG8ApqXCUCx6ci7YxADmaXTFalpKyVYZz0Qw4V2DJxpkaADQgzstLzROeeiOdUiwFh4zFMFUROP4NxkkTuf8W6hmq438mLEU6mhKv8JhiL4f3NrTO4UvHSWFvp5QtiyzJwZOoDvrwCbArMQI/r1IkRJ+F2z1quKKINZlvTzHzJBCxFGxLak9OWdzubDnw+iXb3NIG2a7n7xBqIvHsM6aVjxmOWdMOm4vS+Sc8r1AU7OdZ9FORX5D9OiHKw==")
            
            self.architectView?.loadArchitectWorld(from: Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "ArchitectWorld")!)
            self.view.addSubview(architectView!)
            
            NotificationCenter.default.addObserver(forName: NSNotification.Name.UIApplicationDidBecomeActive, object: nil, queue: OperationQueue.main, using: {(notification) in
                DispatchQueue.main.async(execute: {
                    if self.architectWorldNavigation?.wasInterrupted == true{
                        self.architectView?.reloadArchitectWorld()
                    }
                    self.startWikitudeSDKRendering()
                })
            })
            NotificationCenter.default.addObserver(forName: NSNotification.Name.UIApplicationWillResignActive, object: nil, queue: OperationQueue.main, using: {(notification) in
                DispatchQueue.main.async(execute: {
                    //                    self.stopWikitudeSDKRendering()
                })
            })
            
            
        } catch {
            print(error)
        }
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func startWikitudeSDKRendering(){
        if self.architectView?.isRunning == false{
            self.architectView?.start({ configuration in
                configuration.captureDevicePosition = AVCaptureDevice.Position.back
            }, completion: {isRunning, error in
                if !isRunning{
                    print("WTArchitectView could not be started. Reason: \(error.localizedDescription)")
                } else {
                    print("startWikitudeSDKRendering: isRunning false inside")
                }
            })
        } else {
            print("startWikitudeSDKRendering: isRunning false")
        }
        
    }
    
    func stopWikitudeSDKRendering(){
        if self.architectView?.isRunning == true{
            self.architectView?.stop()
        }
    }
    
    func architectView(_ architectView: WTArchitectView, didFinishLoadArchitectWorldNavigation navigation: WTNavigation) {
        /* Architect World did finish loading */
    }
    
    func architectView(_ architectView: WTArchitectView, didFailToLoadArchitectWorldNavigation navigation: WTNavigation, withError error: Error) {
        print("Architect World from URL \(navigation.originalURL) could not be loaded. Reason: \(error.localizedDescription)");
    }
    
    func architectView(_ architectView: WTArchitectView!, didEncounterInternalError error: NSError!) {
        print("WTArchitectView encountered an internal error \(error.localizedDescription)");
    }
    
}

