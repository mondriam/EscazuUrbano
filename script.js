TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE",
       "backwardYaw": 32.74,
       "class": "AdjacentPanorama",
       "yaw": -141.97,
       "distance": 1
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60",
             "backwardYaw": -97.69,
             "class": "AdjacentPanorama",
             "yaw": -14.21,
             "distance": 1
            }
           ],
           "label": "Co-Working",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "id": "overlay_32D75F0B_3B03_14DE_41A0_63656ECA57C1",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 55.33,
               "bleaching": 0.7,
               "yaw": -55.05
              },
              {
               "id": "overlay_32D342FC_3B03_ED3B_41BD_C17D9DE632E6",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 48.1,
               "bleaching": 0.7,
               "yaw": 90.48
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_315764E9_3B03_155D_41B0_965458EF17D7",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60, this.camera_5B324478_48DF_B7DC_41C9_A6BB4F8C867C); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -14.21,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -21.15,
                 "hfov": 8.2
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -21.15,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -14.21,
                 "hfov": 8.2
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_t.jpg",
           "mapLocations": [
            {
             "y": 587.78,
             "angle": 248.8,
             "class": "PanoramaMapLocation",
             "map": {
              "scaleMode": "fit_inside",
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B.png",
                 "height": 800,
                 "class": "ImageResourceLevel",
                 "width": 431
                },
                {
                 "grayscale": true,
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_lq.png",
                 "height": 400,
                 "class": "ImageResourceLevel",
                 "width": 215
                }
               ],
               "class": "ImageResource"
              },
              "label": "Master-Plan-Map",
              "thumbnailUrl": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_t.png",
              "overlays": [
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_0.png",
                    "height": 24,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 350.78,
                 "height": 25,
                 "y": 677.57,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_BD09ACE0_AE30_3F13_41BD_5FFF039982FA",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 0)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 677.57,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_0_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 350.78
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_1.png",
                    "height": 24,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 339.52,
                 "height": 25,
                 "y": 638.93,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_BDD12C0E_AE31_FF2F_41D8_E01744C9245E",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 7)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 638.93,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_1_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 339.52
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_2.png",
                    "height": 24,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 350.04,
                 "height": 25,
                 "y": 595.19,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_BDD572A2_AE30_EB17_41E2_013B4E1D1816",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 8)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 595.19,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_2_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 350.04
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_3.png",
                    "height": 24,
                    "class": "ImageResourceLevel",
                    "width": 28
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 28.39,
                 "x": 377.14,
                 "height": 25,
                 "y": 600.4,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_BDFDB098_AE33_E732_41E2_82C9C3FBBDEC",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 3)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 600.4,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_3_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 14
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 28.39,
                 "x": 377.14
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_4.png",
                    "height": 24,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 380.93,
                 "height": 25,
                 "y": 647.07,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_BAAAD66C_AE30_6B13_41E4_41C4AF787B88",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 2)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 647.07,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_4_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 380.93
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_5.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 209,
                 "height": 25,
                 "y": 94.31,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B85AADD9_AE30_7935_418C_49774A3F1323",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 13)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 94.31,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_5_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 209
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_6.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 263.82,
                 "height": 25,
                 "y": 658.22,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_BAF4F184_AE30_2913_41D7_D5320C010656",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 14)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 658.22,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_6_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 263.82
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_7.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 180.37,
                 "height": 25,
                 "y": 638.3,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_BB8BD87E_AE30_27EF_41CD_3E50E37DC6C9",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 15)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 638.3,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_7_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 180.37
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_8.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 87.81,
                 "height": 25,
                 "y": 263.65,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B861AF51_AE50_7935_41D1_7279F4D9342F",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 16)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 263.65,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_8_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 87.81
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_9.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 372.56,
                 "height": 25,
                 "y": 575.28,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_9B8B69CB_BD7D_6BCF_41D2_C3E1DE217D96",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 4)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 575.28,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_9_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 372.56
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_10.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 125.83,
                 "height": 25,
                 "y": 215.45,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_9A15731C_BD7D_D84A_41E0_DA389A2E262F",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 6)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 215.45,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_10_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 125.83
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_11.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 385.29,
                 "height": 25,
                 "y": 609.45,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_E8BB89E7_FB2C_68C2_41EC_D51790EAE183",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 5)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 609.45,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_11_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 385.29
                }
               }
              ],
              "fieldOfViewOverlayInsideColor": "#000000",
              "fieldOfViewOverlayInsideOpacity": 0.4,
              "class": "Map",
              "fieldOfViewOverlayOutsideColor": "#000000",
              "minimumZoomFactor": 0.5,
              "maximumZoomFactor": 1.2,
              "fieldOfViewOverlayOutsideOpacity": 0,
              "fieldOfViewOverlayRadiusScale": 0.2,
              "initialZoomFactor": 1,
              "width": 431,
              "height": 800,
              "id": "map_BACA8E9B_AE30_7B35_41C7_293947DB728B"
             },
             "x": 385.06
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC"
          },
          "backwardYaw": -14.21,
          "class": "AdjacentPanorama",
          "yaw": -97.69,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45",
                "backwardYaw": -154.31,
                "class": "AdjacentPanorama",
                "yaw": 18.13,
                "distance": 1
               }
              ],
              "label": "Eventos",
              "hfovMax": 120,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "id": "overlay_32D0DD05_3B03_34D5_41C9_2C9D1E72A517",
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "pitch": 48.48,
                  "bleaching": 0.7,
                  "yaw": -88.19
                 },
                 {
                  "id": "overlay_32DDE104_3B03_2CCB_41C3_6CECAAB1AFD5",
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "pitch": 45.43,
                  "bleaching": 0.7,
                  "yaw": 92
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_315681B9_3B05_2F3D_4184_61C602721AA5",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45, this.camera_5B2D3492_48DF_B72C_41B8_20350FC57BF6); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_0_HS_0_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 18.13,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -9.71,
                    "hfov": 8.66
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_0_HS_0_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -9.71,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 18.13,
                    "hfov": 8.66
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_t.jpg",
              "mapLocations": [
               {
                "y": 621.95,
                "angle": 177.54,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "x": 397.79
               }
              ],
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_3CBB93C8_3B03_135B_4190_D012C0697928"
             },
             "backwardYaw": 18.13,
             "class": "AdjacentPanorama",
             "yaw": -154.31,
             "distance": 1
            },
            {
             "panorama": "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60",
             "backwardYaw": 14.33,
             "class": "AdjacentPanorama",
             "yaw": -178.64,
             "distance": 1
            }
           ],
           "label": "Piscina",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "id": "overlay_32DC33C6_3B03_3356_41C3_4CAA4D015C0E",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 34.76,
               "bleaching": 0.7,
               "yaw": -99.24
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_316A0977_3B03_1F36_41B2_B7744DE767EA",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60, this.camera_5CBED595_48DF_B154_41D2_1C901521CD3D); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_0_HS_2_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -178.64,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 2.81,
                 "hfov": 8.78
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_0_HS_2_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 2.81,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -178.64,
                 "hfov": 8.78
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_317CC518_3B03_34FB_4182_8F4B4DED3310",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928, this.camera_5CC6558B_48DF_B13C_41A5_55F572E2CCB6); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_0_HS_1_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -154.31,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -6.03,
                 "hfov": 8.74
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_0_HS_1_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -6.03,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -154.31,
                 "hfov": 8.74
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_30C5EDEB_3B1D_175D_41BC_CE995A65FCD6",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.showPopupPanoramaOverlay(this.popup_372E31A5_3B1D_6FD5_41C4_BB3430709714, {'pressedBorderColor':'#000000','iconLineWidth':5,'pressedBorderSize':0,'rollOverIconHeight':60,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBorderSize':0,'rollOverIconWidth':60,'backgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':60,'iconWidth':60,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':60,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':60,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','borderSize':0,'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_2A9628DE_3B07_1D77_41CB_1DF42F7BCCDA, null, null, null, null, false)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 12.57,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 4.09,
                 "hfov": 8.77
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 4.09,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 12.57,
                 "hfov": 8.77
                }
               ]
              },
              {
               "image": {
                "levels": [
                 {
                  "url": "media/popup_372E31A5_3B1D_6FD5_41C4_BB3430709714_0_3.jpg",
                  "height": 288,
                  "class": "ImageResourceLevel",
                  "width": 512
                 },
                 {
                  "url": "media/popup_372E31A5_3B1D_6FD5_41C4_BB3430709714_0_2.jpg",
                  "height": 576,
                  "class": "ImageResourceLevel",
                  "width": 1024
                 }
                ],
                "class": "ImageResource"
               },
               "showDuration": 500,
               "hideDuration": 500,
               "hfov": 8.77,
               "popupMaxHeight": "95%",
               "rotationY": 0,
               "rotationZ": 0,
               "rotationX": 0,
               "id": "popup_372E31A5_3B1D_6FD5_41C4_BB3430709714",
               "class": "PopupPanoramaOverlay",
               "popupMaxWidth": "95%",
               "showEasing": "cubic_in",
               "pitch": 4.09,
               "hideEasing": "cubic_out",
               "yaw": 12.57
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_t.jpg",
           "mapLocations": [
            {
             "y": 659.57,
             "angle": 149.95,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "x": 393.43
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45"
          },
          "backwardYaw": -178.64,
          "class": "AdjacentPanorama",
          "yaw": 14.33,
          "distance": 1
         },
         {
          "panorama": "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D",
          "backwardYaw": 70.84,
          "class": "AdjacentPanorama",
          "yaw": 87.87,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60",
             "backwardYaw": -32.39,
             "class": "AdjacentPanorama",
             "yaw": 161.46,
             "distance": 1
            }
           ],
           "label": "Gym",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "id": "overlay_32CA3D9C_3B03_F7FB_416D_E4CDE06F22EA",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 43.14,
               "bleaching": 0.7,
               "yaw": -139.24
              },
              {
               "id": "overlay_32D7D0CC_3B03_ED5A_4195_FB8AD3C4811B",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 50.76,
               "bleaching": 0.7,
               "yaw": 43.24
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_3157DCBC_3B03_353A_41B5_CAA3B3F45EFF",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60, this.camera_5AA2B693_48DF_B32C_41C8_5AEB978195D1); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 161.46,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -22.28,
                 "hfov": 8.13
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -22.28,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 161.46,
                 "hfov": 8.13
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_t.jpg",
           "mapLocations": [
            {
             "y": 612.9,
             "angle": 127.78,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "x": 391.34
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA"
          },
          "backwardYaw": 161.46,
          "class": "AdjacentPanorama",
          "yaw": -32.39,
          "distance": 1
         }
        ],
        "label": "\u00c1rea Social",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "id": "overlay_32D25143_3B03_2F4D_41C9_FE2847AB5FC5",
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 64.86,
            "bleaching": 0.7,
            "yaw": -176.95
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_315A9EA5_3B0D_35D5_41C8_40B43ADC7C94",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45, this.camera_5AACC673_48DF_B3EC_41C6_1091FF5834BE); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_2_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 14.33,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -18.72,
              "hfov": 8.32
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_2_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -18.72,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 14.33,
              "hfov": 8.32
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_31582A88_3B0D_1DDB_41CB_196FFB894908",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA, this.camera_5AA61689_48DF_B33C_41CD_720C11134BF2); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_1_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -32.39,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -19.44,
              "hfov": 8.29
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_1_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -19.44,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -32.39,
              "hfov": 8.29
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_31642749_3B02_F35A_41C9_8592C1AB835A",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC, this.camera_5AB03667_48DF_B3F4_41C5_9006951F2C3D); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -97.69,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -25.39,
              "hfov": 7.94
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -25.39,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -97.69,
              "hfov": 7.94
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_2A2DFDDF_3B07_3775_41CB_8737BBD6B4D2",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D, this.camera_5AA9867E_48DF_B3D4_41C1_3CFC364FE649); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_3_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 87.87,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -6.53,
              "hfov": 8.73
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_3_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -6.53,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 87.87,
              "hfov": 8.73
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_t.jpg",
        "mapLocations": [
         {
          "y": 607.69,
          "angle": 134.08,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "x": 362.54
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60"
       },
       "backwardYaw": 87.87,
       "class": "AdjacentPanorama",
       "yaw": 70.84,
       "distance": 1
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D",
          "backwardYaw": 28.39,
          "class": "AdjacentPanorama",
          "yaw": -176.89,
          "distance": 1
         }
        ],
        "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.03.43.93",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_4629B93A_48E0_D15C_41A0_D79B5B84268D",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D, this.camera_5CF5654E_48DF_B134_4191_021284EC1987); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -176.89,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -3.34,
              "hfov": 8.77
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -3.34,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -176.89,
              "hfov": 8.77
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_t.jpg",
        "mapLocations": [
         {
          "y": 106.81,
          "angle": -14.47,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "x": 221.5
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3"
       },
       "backwardYaw": -176.89,
       "class": "AdjacentPanorama",
       "yaw": 28.39,
       "distance": 1
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D",
          "backwardYaw": -62.42,
          "class": "AdjacentPanorama",
          "yaw": 119.39,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75",
                   "backwardYaw": 53.24,
                   "class": "AdjacentPanorama",
                   "yaw": -167.54,
                   "distance": 1
                  }
                 ],
                 "label": "Parque",
                 "hfovMax": 120,
                 "partial": false,
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "id": "overlay_32D770D7_3B03_2D75_41A0_39E2D331A82B",
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 40.86,
                     "bleaching": 0.7,
                     "yaw": 28
                    },
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_317B4F62_3B06_F34F_41C6_D90973CB4D06",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75, this.camera_5CD69577_48DF_B1D4_41BF_0249C35BAAF4); this.mainPlayList.set('selectedIndex', 16)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_0_HS_0_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -167.54,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -7.31,
                       "hfov": 8.72
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_0_HS_0_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -7.31,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -167.54,
                       "hfov": 8.72
                      }
                     ]
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_t.jpg",
                 "mapLocations": [
                  {
                   "y": 227.95,
                   "angle": 371.07,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                   "x": 138.33
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003"
                },
                "backwardYaw": -167.54,
                "class": "AdjacentPanorama",
                "yaw": 53.24,
                "distance": 1
               },
               {
                "panorama": "this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550",
                "backwardYaw": 1.49,
                "class": "AdjacentPanorama",
                "yaw": -179.2,
                "distance": 1
               }
              ],
              "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.07.10.27",
              "hfovMax": 120,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_428721FE_48E0_50D4_417D_3A83C3A58A61",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003, this.camera_5AA0369E_48DF_B354_41AA_EFD6345A2FF4); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_0_HS_1_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 53.24,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -8.55,
                    "hfov": 8.69
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_0_HS_1_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -8.55,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 53.24,
                    "hfov": 8.69
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_4208A842_48E0_7F2F_41CF_5B487B782237",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550, this.camera_5A9C06A9_48DF_B37C_41C6_2CBE9107D126); this.mainPlayList.set('selectedIndex', 15)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_0_HS_0_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -179.2,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -3.13,
                    "hfov": 8.78
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_0_HS_0_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -3.13,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -179.2,
                    "hfov": 8.78
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_t.jpg",
              "mapLocations": [
               {
                "y": 276.15,
                "angle": -16.89,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "x": 100.31
               }
              ],
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75"
             },
             "backwardYaw": -179.2,
             "class": "AdjacentPanorama",
             "yaw": 1.49,
             "distance": 1
            },
            {
             "panorama": "this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6",
             "backwardYaw": -13.48,
             "class": "AdjacentPanorama",
             "yaw": 148.38,
             "distance": 1
            }
           ],
           "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.06.01.79",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_42C48467_48E1_F7F4_41D1_CD747BC626CB",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6, this.camera_5B23D4CF_48DF_B734_41A4_AAD27034DE7A); this.mainPlayList.set('selectedIndex', 14)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_0_HS_1_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 148.38,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -7.42,
                 "hfov": 8.72
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_0_HS_1_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -7.42,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 148.38,
                 "hfov": 8.72
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_428ADD82_48E0_512C_41CE_80FE692B8CB2",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75, this.camera_5B28E4B3_48DF_B76C_41B8_6062AF92157E); this.mainPlayList.set('selectedIndex', 16)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 1.49,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.93,
                 "hfov": 8.76
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.93,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 1.49,
                 "hfov": 8.76
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_t.jpg",
           "mapLocations": [
            {
             "y": 650.8,
             "angle": -15.26,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "x": 192.87
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550"
          },
          "backwardYaw": 148.38,
          "class": "AdjacentPanorama",
          "yaw": -13.48,
          "distance": 1
         }
        ],
        "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.05.02.40",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_413F14EC_48E0_50F4_41C2_5CFEEC3F21DD",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D, this.camera_5CE6B561_48DF_B1EC_41C9_B2586A249E9E); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_0_HS_1_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 119.39,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -7.87,
              "hfov": 8.71
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_0_HS_1_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -7.87,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 119.39,
              "hfov": 8.71
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_42D2A12C_48E0_D174_41AF_5E77F524E1E3",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550, this.camera_5CDEE56C_48DF_B1F4_41D1_1200DC7379C6); this.mainPlayList.set('selectedIndex', 15)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -13.48,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -6.37,
              "hfov": 8.73
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -6.37,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -13.48,
              "hfov": 8.73
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_t.jpg",
        "mapLocations": [
         {
          "y": 670.72,
          "angle": -47.71,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "x": 276.32
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6"
       },
       "backwardYaw": 119.39,
       "class": "AdjacentPanorama",
       "yaw": -62.42,
       "distance": 1
      }
     ],
     "label": "EscazuUrbano-Win64-Shipping 360 2019.06.09 - 00.31.30.15",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "id": "overlay_32D123BA_3B03_133F_41BF_C4FC184B7013",
         "class": "LensFlarePanoramaOverlay",
         "bleachingDistance": 0.4,
         "pitch": 35.9,
         "bleaching": 0.7,
         "yaw": 100.76
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_31517807_3B0E_FCD5_41C9_B83560C5422F",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6, this.camera_5CFBC544_48DF_B12B_41C1_6F747D3B0E2B); this.mainPlayList.set('selectedIndex', 14)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_5_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -62.42,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -6.19,
           "hfov": 8.74
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_5_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -6.19,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -62.42,
           "hfov": 8.74
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_316EF9A1_3B0F_1FCD_41CD_4BC4281DE0B9",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3, this.camera_5B015539_48DF_B15D_41CD_9B628BDB2274); this.mainPlayList.set('selectedIndex', 13)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_4_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 28.39,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -4.65,
           "hfov": 8.76
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_4_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -4.65,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 28.39,
           "hfov": 8.76
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_317A9CA3_3B0F_15CD_41C5_A201780DF6C6",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.showPopupPanoramaOverlay(this.popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF, {'pressedBorderColor':'#000000','iconLineWidth':5,'pressedBorderSize':0,'rollOverIconHeight':60,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBorderSize':0,'rollOverIconWidth':60,'backgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':60,'iconWidth':60,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':60,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':60,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','borderSize':0,'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_2A9058DC_3B07_1D7B_41C6_531578C00064, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_3_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 2.01,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 15.01,
           "hfov": 8.49
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_3_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 15.01,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 2.01,
           "hfov": 8.49
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_31805906_3B0F_7CD7_41AE_C8E56EC36B1F",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459, this.camera_2986C09F_3B07_6DF6_41C8_6346CB6F00D7); this.mainPlayList.set('selectedIndex', 1)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_2_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -4.18,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 0.45,
           "hfov": 8.79
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_2_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.45,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -4.18,
           "hfov": 8.79
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_317428A0_3B0F_1DCB_4188_FB8395B0E77A",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60, this.camera_5B07752F_48DF_B175_41C0_9334F8676768); this.mainPlayList.set('selectedIndex', 8)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_1_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 70.84,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -5.57,
           "hfov": 8.75
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_1_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -5.57,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 70.84,
           "hfov": 8.75
          }
         ]
        },
        {
         "image": {
          "levels": [
           {
            "url": "media/popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF_0_3.jpg",
            "height": 288,
            "class": "ImageResourceLevel",
            "width": 512
           },
           {
            "url": "media/popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF_0_2.jpg",
            "height": 576,
            "class": "ImageResourceLevel",
            "width": 1024
           }
          ],
          "class": "ImageResource"
         },
         "showDuration": 500,
         "hideDuration": 500,
         "hfov": 8.49,
         "popupMaxHeight": "95%",
         "rotationY": 0,
         "rotationZ": 0,
         "rotationX": 0,
         "id": "popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF",
         "class": "PopupPanoramaOverlay",
         "popupMaxWidth": "95%",
         "showEasing": "cubic_in",
         "pitch": 15.01,
         "hideEasing": "cubic_out",
         "yaw": 2.01
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_3629DD14_3B05_34CB_41C4_66551A75688F",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE, this.camera_5B0D2525_48DF_B175_41BF_F03411F98CF7); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_0_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -141.97,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -12.45,
           "hfov": 8.58
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_0_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -12.45,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -141.97,
           "hfov": 8.58
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_t.jpg",
     "mapLocations": [
      {
       "y": 651.43,
       "angle": -25.09,
       "class": "PanoramaMapLocation",
       "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
       "x": 352.02
      }
     ],
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D"
    },
    "backwardYaw": -141.97,
    "class": "AdjacentPanorama",
    "yaw": 32.74,
    "distance": 1
   }
  ],
  "label": "Entrada",
  "hfovMax": 120,
  "partial": false,
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "overlays": [
     {
      "id": "overlay_31A10C1C_3B03_74FB_41C0_5CB3AC92D3FC",
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "pitch": 34.76,
      "bleaching": 0.7,
      "yaw": 98.48
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_3137239D_3B0D_13F5_41CA_F947019E0BF9",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D, this.camera_5B1E24E4_48DF_B0F4_41BF_69B5A2531538); this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_0_HS_1_0.png",
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 146
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 32.74,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -11.44,
        "hfov": 8.61
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_0_HS_1_0_0_map.gif",
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.44,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 32.74,
        "hfov": 8.61
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_316838E6_3B0D_7D57_41A0_68FD9A3260AD",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_31E31D06_3B03_14D7_41BC_A7272672761F, {'pressedBorderColor':'#000000','iconLineWidth':5,'pressedBorderSize':0,'rollOverIconHeight':60,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBorderSize':0,'rollOverIconWidth':60,'backgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':60,'iconWidth':60,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':60,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':60,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','borderSize':0,'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_2A92D8D8_3B07_1D7B_41C8_F30730B9CCB7, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_0_HS_0_0.png",
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 146
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -128.76,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.27,
        "hfov": 8.79
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_0_HS_0_0_0_map.gif",
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.27,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -128.76,
        "hfov": 8.79
       }
      ]
     },
     {
      "image": {
       "levels": [
        {
         "url": "media/popup_31E31D06_3B03_14D7_41BC_A7272672761F_0_3.jpg",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_31E31D06_3B03_14D7_41BC_A7272672761F_0_2.jpg",
         "height": 576,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ],
       "class": "ImageResource"
      },
      "showDuration": 500,
      "hideDuration": 500,
      "hfov": 8.79,
      "popupMaxHeight": "95%",
      "rotationY": 0,
      "rotationZ": 0,
      "rotationX": 0,
      "id": "popup_31E31D06_3B03_14D7_41BC_A7272672761F",
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "pitch": 1.27,
      "hideEasing": "cubic_out",
      "yaw": -128.76
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_t.jpg",
  "mapLocations": [
   {
    "y": 690.07,
    "angle": -38.19,
    "class": "PanoramaMapLocation",
    "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
    "x": 363.28
   }
  ],
  "hfovMin": 60,
  "pitch": 0,
  "id": "panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE"
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonCardboardView": {
   "toolTipShadowBlurRadius": 3,
   "toolTipBorderSize": 1,
   "height": 50,
   "toolTipFontColor": "#606060",
   "paddingRight": 0,
   "toolTipPaddingTop": 4,
   "transparencyActive": false,
   "toolTipPaddingLeft": 6,
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowOpacity": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipFontFamily": "Arial",
   "toolTipFontWeight": "normal",
   "minHeight": 1,
   "toolTipBorderColor": "#767676",
   "toolTipBorderRadius": 3,
   "mode": "push",
   "toolTipFontSize": 12,
   "toolTipTextShadowBlurRadius": 3,
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "minWidth": 1,
   "class": "IconButton",
   "toolTipPaddingBottom": 4,
   "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
   "toolTipOpacity": 1,
   "toolTipFontStyle": "normal",
   "toolTip": "VR",
   "backgroundOpacity": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowOpacity": 1,
   "toolTipPaddingRight": 6,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 75,
   "toolTipShadowHorizontalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowSpread": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
  },
  "mouseControlMode": "drag_acceleration"
 },
 {
  "viewerArea": {
   "toolTipBorderSize": 1,
   "toolTipPaddingTop": 4,
   "playbackBarProgressBorderRadius": 0,
   "progressBarBorderRadius": 0,
   "progressBarBorderSize": 0,
   "transitionMode": "blending",
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowOpacity": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipFontFamily": "Arial",
   "toolTipBorderColor": "#767676",
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "toolTipBorderRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontSize": 12,
   "toolTipTextShadowBlurRadius": 3,
   "shadow": false,
   "playbackBarHeadBorderRadius": 0,
   "class": "ViewerArea",
   "toolTipOpacity": 1,
   "toolTipPaddingRight": 6,
   "progressLeft": 0,
   "playbackBarHeadBorderColor": "#000000",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "paddingBottom": 0,
   "playbackBarBorderSize": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundOpacity": 1,
   "playbackBarProgressOpacity": 1,
   "playbackBarLeft": 0,
   "id": "MapViewer",
   "width": "100%",
   "playbackBarHeadHeight": 15,
   "borderSize": 0,
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadBorderSize": 0,
   "progressRight": 0,
   "playbackBarHeadShadowColor": "#000000",
   "progressOpacity": 1,
   "paddingRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadow": true,
   "toolTipFontColor": "#606060",
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadOpacity": 1,
   "toolTipShadowSpread": 0,
   "progressBackgroundOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarOpacity": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "height": "100%",
   "toolTipShadowVerticalLength": 0,
   "progressBarOpacity": 1,
   "playbackBarBottom": 0,
   "progressBorderColor": "#000000",
   "progressBottom": 2,
   "minHeight": 1,
   "progressHeight": 10,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "progressBorderSize": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipFontStyle": "normal",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingTop": 0,
   "minWidth": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBorderRadius": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeight": 10,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarHeadWidth": 6,
   "playbackBarRight": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarBorderColor": "#FFFFFF"
  },
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "movementMode": "constrained"
 },
 {
  "id": "panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
             "backwardYaw": 19.97,
             "class": "AdjacentPanorama",
             "yaw": 23.98,
             "distance": 1
            }
           ],
           "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.11.49.79",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_44CEEFBE_48E0_5154_41D2_11E5B50AF3A5",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A, this.camera_5CA5D5B4_48DF_B154_41D1_21C5D881B457); this.mainPlayList.set('selectedIndex', 18)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 23.98,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -28.71,
                 "hfov": 7.71
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -28.71,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 23.98,
                 "hfov": 7.71
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_t.jpg",
           "mapLocations": [
            {
             "y": 653.97,
             "angle": 0,
             "class": "PanoramaMapLocation",
             "map": {
              "scaleMode": "fit_inside",
              "image": {
               "levels": [
                {
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E.png",
                 "height": 800,
                 "class": "ImageResourceLevel",
                 "width": 344
                },
                {
                 "grayscale": true,
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_lq.png",
                 "height": 400,
                 "class": "ImageResourceLevel",
                 "width": 172
                }
               ],
               "class": "ImageResource"
              },
              "label": "2-piso",
              "thumbnailUrl": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_t.png",
              "overlays": [
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_0.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 282.72,
                 "height": 25,
                 "y": 427.61,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B8F85CB0_AE70_3F73_41C3_DC7B01FC0984",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 17)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 427.61,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_0_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 282.72
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_1.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 54.14,
                 "height": 25,
                 "y": 478.53,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B9A37DAA_AE70_1917_41C7_01122E6A0AED",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 10)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 478.53,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_1_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 54.14
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_2.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 86.96,
                 "height": 25,
                 "y": 641.47,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B9B931CA_AE70_6916_41D9_A5584E238A36",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 20)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 641.47,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_2_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 86.96
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_3.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 245.37,
                 "height": 25,
                 "y": 594,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B98B7224_AE70_2B13_41D2_E4AA8B59B901",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 19)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 594,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_3_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 245.37
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_4.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 174.14,
                 "height": 25,
                 "y": 320.11,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B8C7E95D_AE70_192D_41E1_11DAC171E4FE",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 21)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 320.11,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_4_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 174.14
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_5.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 229.53,
                 "height": 25,
                 "y": 221.61,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B93268DD_AE71_E72D_41D4_1633A180488E",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 12)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 221.61,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_5_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 229.53
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_6.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 129.9,
                 "height": 25,
                 "y": 378.95,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B902B875_AE71_E7FD_41E1_C80DD5F6AC12",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 11)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 378.95,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_6_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 129.9
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_7.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 133.35,
                 "height": 25,
                 "y": 484.19,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B8C2A774_AE70_69FC_41E1_7E3B506459F7",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 18)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 484.19,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_7_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 133.35
                }
               }
              ],
              "fieldOfViewOverlayInsideColor": "#000000",
              "fieldOfViewOverlayInsideOpacity": 0.4,
              "class": "Map",
              "fieldOfViewOverlayOutsideColor": "#000000",
              "minimumZoomFactor": 0.5,
              "maximumZoomFactor": 1.2,
              "fieldOfViewOverlayOutsideOpacity": 0,
              "fieldOfViewOverlayRadiusScale": 0.2,
              "initialZoomFactor": 1,
              "width": 344,
              "height": 800,
              "id": "map_B86E682C_AE70_6713_41DE_CACB87474A6E"
             },
             "x": 99.46
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7"
          },
          "backwardYaw": 23.98,
          "class": "AdjacentPanorama",
          "yaw": 19.97,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
             "backwardYaw": 77.84,
             "class": "AdjacentPanorama",
             "yaw": 111.89,
             "distance": 1
            }
           ],
           "label": "EscazuUrbano-Win64-Shipping 360 2019.06.08 - 23.09.58.93",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_30C8DCA2_3AD4_6674_41CA_A28F394ECBCF",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A, this.camera_5CCE3581_48DF_B12C_41C3_E23FAFC898A8); this.mainPlayList.set('selectedIndex', 18)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 111.89,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -42.11,
                 "hfov": 6.52
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -42.11,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 111.89,
                 "hfov": 6.52
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_t.jpg",
           "mapLocations": [
            {
             "y": 491.03,
             "angle": -29.11,
             "class": "PanoramaMapLocation",
             "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
             "x": 66.64
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07"
          },
          "backwardYaw": 111.89,
          "class": "AdjacentPanorama",
          "yaw": 77.84,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
             "backwardYaw": -45.27,
             "class": "AdjacentPanorama",
             "yaw": 9.41,
             "distance": 1
            }
           ],
           "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.10.56.29",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_431D423B_48E0_535D_41A4_B8A2488F2153",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A, this.camera_5CAE15A9_48DF_B17C_41CD_1FE0A5ED40F1); this.mainPlayList.set('selectedIndex', 18)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 9.41,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -26.18,
                 "hfov": 7.89
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -26.18,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 9.41,
                 "hfov": 7.89
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_t.jpg",
           "mapLocations": [
            {
             "y": 606.5,
             "angle": 299.96,
             "class": "PanoramaMapLocation",
             "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
             "x": 257.87
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_4F52997B_48E0_51DC_4196_47E37636AA82"
          },
          "backwardYaw": 9.41,
          "class": "AdjacentPanorama",
          "yaw": -45.27,
          "distance": 1
         },
         {
          "panorama": "this.panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49",
          "backwardYaw": -180,
          "class": "AdjacentPanorama",
          "yaw": -111.12,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
             "backwardYaw": 174.05,
             "class": "AdjacentPanorama",
             "yaw": -145.83,
             "distance": 1
            },
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE",
                   "backwardYaw": -56.99,
                   "class": "AdjacentPanorama",
                   "yaw": 82.07,
                   "distance": 1
                  }
                 ],
                 "label": "EscazuUrbano-Win64-Shipping 360 2019.06.08 - 23.13.08.52",
                 "hfovMax": 120,
                 "partial": false,
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "id": "overlay_30DE33D6_3ADC_21DF_41BA_CF03CCCDB267",
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 49.24,
                     "bleaching": 0.7,
                     "yaw": -36
                    },
                    {
                     "id": "overlay_30D2C6DE_3ADC_23CC_41C4_310B0FE53FB7",
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 67.52,
                     "bleaching": 0.7,
                     "yaw": 139.24
                    },
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_35E327C4_3FC5_1C55_4187_2D0D3344C760",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE, this.camera_5AB3465D_48DF_B3D4_41D1_49A33B6FE5A5); this.mainPlayList.set('selectedIndex', 21)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_0_HS_1_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 82.07,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -36.46,
                       "hfov": 7.07
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_0_HS_1_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -36.46,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 82.07,
                       "hfov": 7.07
                      }
                     ]
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_t.jpg",
                 "mapLocations": [
                  {
                   "y": 234.11,
                   "angle": 152.28,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "x": 242.03
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277"
                },
                "backwardYaw": 82.07,
                "class": "AdjacentPanorama",
                "yaw": -56.99,
                "distance": 1
               },
               {
                "panorama": "this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2",
                "backwardYaw": 69.44,
                "class": "AdjacentPanorama",
                "yaw": 115.91,
                "distance": 1
               }
              ],
              "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.13.04.57",
              "hfovMax": 120,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_4416E911_48E1_B12F_41C2_899F6C846290",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2, this.camera_5B372462_48DF_B7EC_41B9_0D358E78FAC6); this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_0_HS_2_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 115.91,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -42.92,
                    "hfov": 6.44
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_0_HS_2_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -42.92,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 115.91,
                    "hfov": 6.44
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_45AB643C_48E0_F754_41BB_9BA442ABFAC3",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 18)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_0_HS_1_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 108.59,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -21.58,
                    "hfov": 8.17
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_0_HS_1_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -21.58,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 108.59,
                    "hfov": 8.17
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_456C21D9_48FF_D0DD_41C1_D50F91553A8C",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277, this.camera_5B3AE446_48DF_B734_41D2_23847BEF5348); this.mainPlayList.set('selectedIndex', 12)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_0_HS_0_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -56.99,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -39.11,
                    "hfov": 6.82
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_0_HS_0_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -39.11,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -56.99,
                    "hfov": 6.82
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_t.jpg",
              "mapLocations": [
               {
                "y": 332.61,
                "angle": 88.4,
                "class": "PanoramaMapLocation",
                "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                "x": 186.64
               }
              ],
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE"
             },
             "backwardYaw": 115.91,
             "class": "AdjacentPanorama",
             "yaw": 69.44,
             "distance": 1
            }
           ],
           "label": "EscazuUrbano-Win64-Shipping 360 2019.06.08 - 23.11.18.89",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "id": "overlay_30DE25B5_3ADC_665D_41B4_38498AEE4F6A",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 75.9,
               "bleaching": 0.7,
               "yaw": 25.71
              },
              {
               "id": "overlay_30D5ED1D_3ADC_664C_41BC_70CBD422AC9D",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 30.19,
               "bleaching": 0.7,
               "yaw": -45.9
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_30C8B9CD_3AD4_E1CD_41C6_A6B467054B39",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A, this.camera_5B186505_48DF_B134_41CE_92450FD85145); this.mainPlayList.set('selectedIndex', 18)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_0_HS_1_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -145.83,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -35.83,
                 "hfov": 7.13
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_0_HS_1_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -35.83,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -145.83,
                 "hfov": 7.13
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_30D84B67_3AD4_22FC_41A9_75C22D2FC5E4",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE, this.camera_5B13051B_48DF_B15D_41C8_B58A18E22EB7); this.mainPlayList.set('selectedIndex', 21)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 69.44,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -47.3,
                 "hfov": 5.96
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -47.3,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 69.44,
                 "hfov": 5.96
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_t.jpg",
           "mapLocations": [
            {
             "y": 391.45,
             "angle": -11.23,
             "class": "PanoramaMapLocation",
             "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
             "x": 142.4
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2"
          },
          "backwardYaw": -145.83,
          "class": "AdjacentPanorama",
          "yaw": 174.05,
          "distance": 1
         }
        ],
        "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.09.58.87",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_43B8B46B_48E0_57FC_41C6_71454EA0725C",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 17)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_4_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -111.12,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -37.36,
              "hfov": 6.99
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_4_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -37.36,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -111.12,
              "hfov": 6.99
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_43435B3E_48E0_B157_41C7_48A176AEC2D9",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_4F52997B_48E0_51DC_4196_47E37636AA82, this.camera_5AB95648_48DF_B33C_41A9_D8580A5C0A3A); this.mainPlayList.set('selectedIndex', 19)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_3_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -45.27,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -21.43,
              "hfov": 8.18
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_3_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -21.43,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -45.27,
              "hfov": 8.18
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_432523D8_48E7_D0DD_41C5_1519EB5CCC40",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7, this.camera_5ABDF633_48DF_B36C_41B7_D0FA400D49B2); this.mainPlayList.set('selectedIndex', 20)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_2_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 19.97,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -18.42,
              "hfov": 8.34
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_2_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -18.42,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 19.97,
              "hfov": 8.34
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_4303AD0C_48E0_D134_419F_163DFD9577B2",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07, this.camera_5ABC263E_48DF_B354_41C1_454D6C825B21); this.mainPlayList.set('selectedIndex', 10)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_1_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 77.84,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -38.41,
              "hfov": 6.89
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_1_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -38.41,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 77.84,
              "hfov": 6.89
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_44E6C298_48E1_D35B_41D2_0A0F64FCF8A6",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2, this.camera_5AB67653_48DF_B32C_41CC_25024EA3B162); this.mainPlayList.set('selectedIndex', 11)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 174.05,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -39.62,
              "hfov": 6.77
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -39.62,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 174.05,
              "hfov": 6.77
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_47B3C8D4_48E0_FF2B_41BA_B895944EB009",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.showPopupPanoramaOverlay(this.popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165, {'pressedBorderColor':'#000000','iconLineWidth':5,'pressedBorderSize':0,'rollOverIconHeight':60,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBorderSize':0,'rollOverIconWidth':60,'backgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':60,'iconWidth':60,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':60,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':60,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','borderSize':0,'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_58E53158_48E1_F1DC_41D0_5EE0346D0DCA, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_5_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -14.93,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -7.31,
              "hfov": 8.72
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_5_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -7.31,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -14.93,
              "hfov": 8.72
             }
            ]
           },
           {
            "image": {
             "levels": [
              {
               "url": "media/popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165_0_2.jpg",
               "height": 512,
               "class": "ImageResourceLevel",
               "width": 512
              },
              {
               "url": "media/popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165_0_1.jpg",
               "height": 1024,
               "class": "ImageResourceLevel",
               "width": 1024
              }
             ],
             "class": "ImageResource"
            },
            "showDuration": 500,
            "hideDuration": 500,
            "hfov": 8.72,
            "popupMaxHeight": "95%",
            "rotationY": 0,
            "rotationZ": 0,
            "rotationX": 0,
            "id": "popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165",
            "class": "PopupPanoramaOverlay",
            "popupMaxWidth": "95%",
            "showEasing": "cubic_in",
            "pitch": -7.31,
            "hideEasing": "cubic_out",
            "yaw": -14.93
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_t.jpg",
        "mapLocations": [
         {
          "y": 496.69,
          "angle": -175.04,
          "class": "PanoramaMapLocation",
          "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
          "x": 145.85
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A"
       },
       "backwardYaw": -180,
       "class": "AdjacentPanorama",
       "yaw": -18.45,
       "distance": 1
      },
      {
       "panorama": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459",
       "backwardYaw": -160.97,
       "class": "AdjacentPanorama",
       "yaw": 9.42,
       "distance": 1
      }
     ],
     "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.09.03.78",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_43E11B49_48E3_F13D_41D1_79089E0F58CA",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 1)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_0_HS_1_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 9.42,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -33.31,
           "hfov": 7.35
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_0_HS_1_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -33.31,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 9.42,
           "hfov": 7.35
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_43C88A5D_48E0_D3D5_41C8_2DF59FFA71DC",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 18)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_0_HS_0_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -18.45,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -9.32,
           "hfov": 8.67
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_0_HS_0_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.32,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -18.45,
           "hfov": 8.67
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_t.jpg",
     "mapLocations": [
      {
       "y": 433.43,
       "angle": -87.21,
       "class": "PanoramaMapLocation",
       "map": {
        "scaleMode": "fit_inside",
        "image": {
         "levels": [
          {
           "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C.png",
           "height": 800,
           "class": "ImageResourceLevel",
           "width": 344
          },
          {
           "grayscale": true,
           "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_lq.png",
           "height": 400,
           "class": "ImageResourceLevel",
           "width": 172
          }
         ],
         "class": "ImageResource"
        },
        "label": "1-piso",
        "thumbnailUrl": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_t.png",
        "overlays": [
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_0.png",
              "height": 25,
              "class": "ImageResourceLevel",
              "width": 25
             }
            ],
            "class": "ImageResource"
           },
           "width": 25,
           "x": 41.58,
           "height": 25,
           "y": 440.17,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_B8AFC1F0_AE70_E8F3_41DF_4DA851E12770",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 1)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": true,
          "map": {
           "height": 25,
           "y": 440.17,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_0_map.gif",
              "height": 12,
              "class": "ImageResourceLevel",
              "width": 12
             }
            ],
            "class": "ImageResource"
           },
           "width": 25,
           "x": 41.58
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_1.png",
              "height": 25,
              "class": "ImageResourceLevel",
              "width": 25
             }
            ],
            "class": "ImageResource"
           },
           "width": 25,
           "x": 222.63,
           "height": 25,
           "y": 233.1,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_B942F424_AE70_2F13_4182_5C003BEE434A",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 9)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": true,
          "map": {
           "height": 25,
           "y": 233.1,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_1_map.gif",
              "height": 12,
              "class": "ImageResourceLevel",
              "width": 12
             }
            ],
            "class": "ImageResource"
           },
           "width": 25,
           "x": 222.63
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_2.png",
              "height": 25,
              "class": "ImageResourceLevel",
              "width": 25
             }
            ],
            "class": "ImageResource"
           },
           "width": 25,
           "x": 290.52,
           "height": 25,
           "y": 420.93,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_B925714F_AE70_692D_4194_4B98DAECC533",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 17)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": true,
          "map": {
           "height": 25,
           "y": 420.93,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_2_map.gif",
              "height": 12,
              "class": "ImageResourceLevel",
              "width": 12
             }
            ],
            "class": "ImageResource"
           },
           "width": 25,
           "x": 290.52
          }
         }
        ],
        "fieldOfViewOverlayInsideColor": "#000000",
        "fieldOfViewOverlayInsideOpacity": 0.4,
        "class": "Map",
        "fieldOfViewOverlayOutsideColor": "#000000",
        "minimumZoomFactor": 0.5,
        "maximumZoomFactor": 1.2,
        "fieldOfViewOverlayOutsideOpacity": 0,
        "fieldOfViewOverlayRadiusScale": 0.2,
        "initialZoomFactor": 1,
        "width": 344,
        "height": 800,
        "id": "map_B8CA0598_AE70_6932_41E3_495D3E2D778C"
       },
       "x": 303.02
      },
      {
       "y": 440.11,
       "angle": -88.29,
       "class": "PanoramaMapLocation",
       "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
       "x": 295.22
      }
     ],
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49"
    },
    "backwardYaw": -180,
    "class": "AdjacentPanorama",
    "yaw": 52.4,
    "distance": 1
   },
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459",
       "backwardYaw": 19.04,
       "class": "AdjacentPanorama",
       "yaw": 15.89,
       "distance": 1
      }
     ],
     "label": "EscazuUrbano-Win64-Shipping 360 2019.06.08 - 23.02.20.11",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "id": "overlay_30E0D2A3_3ADC_2274_41A0_E740519C893E",
         "class": "LensFlarePanoramaOverlay",
         "bleachingDistance": 0.4,
         "pitch": 36.29,
         "bleaching": 0.25,
         "yaw": 43.62
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_30D5C2E1_3ADC_63F4_41AC_BF468F7BCCAA",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459, this.camera_5CB6759F_48DF_B154_41C0_0CBFFEA26EE4); this.mainPlayList.set('selectedIndex', 1)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_0_HS_0_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 15.89,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -13.59,
           "hfov": 8.54
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_0_HS_0_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -13.59,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 15.89,
           "hfov": 8.54
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_t.jpg",
     "mapLocations": [
      {
       "y": 245.6,
       "angle": 205.47,
       "class": "PanoramaMapLocation",
       "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
       "x": 235.13
      }
     ],
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1"
    },
    "backwardYaw": 15.89,
    "class": "AdjacentPanorama",
    "yaw": 19.04,
    "distance": 1
   }
  ],
  "label": "Casa Modelo",
  "hfovMax": 120,
  "partial": false,
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "overlays": [
     {
      "id": "overlay_33E786B2_3AD4_E254_41CB_16877F5108CA",
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "pitch": 61.43,
      "bleaching": 0.7,
      "yaw": 25.33
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_3388DCA1_3AD7_E675_41B0_8E1774713537",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1, this.camera_5CEEC557_48DF_B1D4_41C6_454F529A41B7); this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_3_0.png",
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 146
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 19.04,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.02,
        "hfov": 8.68
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_3_0_0_map.gif",
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.02,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 19.04,
        "hfov": 8.68
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_3361DD02_3AD4_2634_41CB_39BE9C409A25",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_28BA60CC_3B05_2D5A_416C_5C114F31F134, {'pressedBorderColor':'#000000','iconLineWidth':5,'pressedBorderSize':0,'rollOverIconHeight':60,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'rollOverBorderSize':0,'rollOverIconWidth':60,'backgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':60,'iconWidth':60,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':60,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':60,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','borderSize':0,'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_2EAB1950_3B05_3F4B_41A6_C23121A41D92, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_2_0.png",
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 146
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 10.44,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.28,
        "hfov": 8.79
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_2_0_0_map.gif",
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.28,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 10.44,
        "hfov": 8.79
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_3364C9F6_3AD5_E1DC_4194_F15E61A0F278",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_3D78BFB9_3ACD_646D_41B7_1D07D9D54DC0, this.camera_28CA1E73_3B05_154D_4194_1548566D5D3F); this.mainPlayList.set('selectedIndex', 17)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_1_0.png",
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 146
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 52.4,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 11.39,
        "hfov": 8.62
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_1_0_0_map.gif",
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 11.39,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 52.4,
        "hfov": 8.62
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_3369E4D5_3AD4_27DD_41BC_226048948ABF",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D, this.camera_29401FF8_3B07_133A_41CA_2A2062E7051A); this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_0_0.png",
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 146
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 78.41,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.56,
        "hfov": 8.69
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_0_0_0_map.gif",
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.56,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 78.41,
        "hfov": 8.69
       }
      ]
     },
     {
      "image": {
       "levels": [
        {
         "url": "media/popup_28BA60CC_3B05_2D5A_416C_5C114F31F134_0_2.jpg",
         "height": 512,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_28BA60CC_3B05_2D5A_416C_5C114F31F134_0_1.jpg",
         "height": 1024,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ],
       "class": "ImageResource"
      },
      "showDuration": 500,
      "hideDuration": 500,
      "hfov": 8.79,
      "popupMaxHeight": "95%",
      "rotationY": 0,
      "rotationZ": 0,
      "rotationX": 0,
      "id": "popup_28BA60CC_3B05_2D5A_416C_5C114F31F134",
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "pitch": 1.28,
      "hideEasing": "cubic_out",
      "yaw": 10.44
     },
     {
      "id": "overlay_2C5AEDEF_3B02_F755_41B6_E7020FC82DBF",
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "pitch": 5.43,
      "bleaching": 0.12,
      "yaw": -5.52
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_t.jpg",
  "mapLocations": [
   {
    "y": 452.67,
    "angle": 10.22,
    "class": "PanoramaMapLocation",
    "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
    "x": 54.08
   }
  ],
  "hfovMin": 60,
  "pitch": 0,
  "id": "panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459"
 },
 {
  "id": "panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -4.75,
   "class": "PanoramaCameraPosition",
   "yaw": 19.03
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45",
 {
  "id": "panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA",
 {
  "id": "panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC",
 {
  "id": "panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928",
 {
  "id": "panorama_3CBB93C8_3B03_135B_4190_D012C0697928_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003",
 {
  "id": "panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D",
 {
  "id": "panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60",
 {
  "id": "panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1",
 {
  "id": "panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07",
 {
  "id": "panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2",
 {
  "id": "panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277",
 {
  "id": "panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3",
 {
  "id": "panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6",
 {
  "id": "panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550",
 {
  "id": "panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75",
 {
  "id": "panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49",
 {
  "id": "panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
 {
  "id": "panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_4F52997B_48E0_51DC_4196_47E37636AA82",
 {
  "id": "panorama_4F52997B_48E0_51DC_4196_47E37636AA82_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7",
 {
  "id": "panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE",
 {
  "id": "panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "media": "this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B5403E3_48DF_B0EC_41D1_F6858485D45D, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B5403E3_48DF_B0EC_41D1_F6858485D45D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B53B3E3_48DF_B0EC_41A4_18446835CB4F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B53B3E3_48DF_B0EC_41A4_18446835CB4F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B5333E3_48DF_B0EC_419C_63E94F965360, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B5333E3_48DF_B0EC_419C_63E94F965360",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B52E3E4_48DF_B0F4_41CF_9535FDED8EE8, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B52E3E4_48DF_B0F4_41CF_9535FDED8EE8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B5283E4_48DF_B0F4_41B7_333005B94936, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B5283E4_48DF_B0F4_41B7_333005B94936",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B5233E9_48DF_B0FC_41D0_DEE741B75E34, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B5233E9_48DF_B0FC_41D0_DEE741B75E34",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B51D3EA_48DF_B0FC_41B9_BD92E489AFE5, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B51D3EA_48DF_B0FC_41B9_BD92E489AFE5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B5173EA_48DF_B0FC_41C2_26BE6571F3F2, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B5173EA_48DF_B0FC_41C2_26BE6571F3F2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B5103EA_48DF_B0FC_41AA_B5C3B03A7566, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B5103EA_48DF_B0FC_41AA_B5C3B03A7566",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B5093EA_48DF_B0FC_41B7_1BD386779444, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B5093EA_48DF_B0FC_41B7_1BD386779444",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "media": "this.panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B5043EB_48DF_B0FC_41BD_6D36A595F8AD, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B5043EB_48DF_B0FC_41BD_6D36A595F8AD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "media": "this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B4FE3EB_48DF_B0FC_41CD_68743082A2AE, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B4FE3EB_48DF_B0FC_41CD_68743082A2AE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "media": "this.panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B4F93F1_48DF_B0EC_41C6_A3A211FC8E42, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B4F93F1_48DF_B0EC_41C6_A3A211FC8E42",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "media": "this.panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B4F33F1_48DF_B0EC_41B8_08E5E0E39E35, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B4F33F1_48DF_B0EC_41B8_08E5E0E39E35",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "media": "this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B4EB3F1_48DF_B0EC_419B_21F0FBB79369, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B4EB3F1_48DF_B0EC_419B_21F0FBB79369",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "media": "this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B4E33F1_48DF_B0EC_418C_1468C6622546, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B4E33F1_48DF_B0EC_418C_1468C6622546",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "media": "this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B4DD3F2_48DF_B0EC_41D1_0382252164E8, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B4DD3F2_48DF_B0EC_41D1_0382252164E8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "media": "this.panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B4D73F2_48DF_B0EC_41C9_EE4D5D00E336, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B4D73F2_48DF_B0EC_41C9_EE4D5D00E336",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "media": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B4CF3F8_48DF_B0DC_41C9_AA6FDA62DE3F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B4CF3F8_48DF_B0DC_41C9_AA6FDA62DE3F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "media": "this.panorama_4F52997B_48E0_51DC_4196_47E37636AA82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B4C83F8_48DF_B0DC_41B2_5154795651E3, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B4C83F8_48DF_B0DC_41B2_5154795651E3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4F52997B_48E0_51DC_4196_47E37636AA82_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "media": "this.panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B4C13F8_48DF_B0DC_41D2_3A2D9C88A366, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B4C13F8_48DF_B0DC_41D2_3A2D9C88A366",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "media": "this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5B4BA3F8_48DF_B0DC_41C5_5766D948C560, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_5B4BA3F8_48DF_B0DC_41C5_5766D948C560",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1)"
   },
   {
    "media": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2)"
   },
   {
    "media": "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)"
   },
   {
    "media": "this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4)"
   },
   {
    "media": "this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5)"
   },
   {
    "media": "this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6)"
   },
   {
    "media": "this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 0)"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
  "class": "PlayList"
 },
 "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
 {
  "items": [
   {
    "media": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_5B54F3DD_48DF_B0D4_41C6_900E0BA9FC83",
  "class": "PlayList"
 },
 "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
 {
  "items": [
   {
    "media": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_5B54D3DD_48DF_B0D4_41B0_127084DE3EFA",
  "class": "PlayList"
 },
 "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
 {
  "items": [
   {
    "media": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_5B54A3DD_48DF_B0D4_418F_264449293CF4",
  "class": "PlayList"
 },
 {
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "class": "FadeInEffect",
  "easing": "linear",
  "duration": 1000
 },
 {
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "class": "FadeOutEffect",
  "easing": "linear",
  "duration": 1000
 },
 "this.popup_31E31D06_3B03_14D7_41BC_A7272672761F",
 {
  "id": "ImageResource_2A92D8D8_3B07_1D7B_41C8_F30730B9CCB7",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_31E31D06_3B03_14D7_41BC_A7272672761F_0_0.jpg",
    "height": 1998,
    "class": "ImageResourceLevel",
    "width": 3551
   },
   {
    "url": "media/popup_31E31D06_3B03_14D7_41BC_A7272672761F_0_1.jpg",
    "height": 1152,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_31E31D06_3B03_14D7_41BC_A7272672761F_0_2.jpg",
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_31E31D06_3B03_14D7_41BC_A7272672761F_0_3.jpg",
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_28BA60CC_3B05_2D5A_416C_5C114F31F134",
 {
  "id": "ImageResource_2EAB1950_3B05_3F4B_41A6_C23121A41D92",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_28BA60CC_3B05_2D5A_416C_5C114F31F134_0_0.jpg",
    "height": 1500,
    "class": "ImageResourceLevel",
    "width": 1500
   },
   {
    "url": "media/popup_28BA60CC_3B05_2D5A_416C_5C114F31F134_0_1.jpg",
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_28BA60CC_3B05_2D5A_416C_5C114F31F134_0_2.jpg",
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_372E31A5_3B1D_6FD5_41C4_BB3430709714",
 {
  "id": "ImageResource_2A9628DE_3B07_1D77_41CB_1DF42F7BCCDA",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_372E31A5_3B1D_6FD5_41C4_BB3430709714_0_0.jpg",
    "height": 1998,
    "class": "ImageResourceLevel",
    "width": 3551
   },
   {
    "url": "media/popup_372E31A5_3B1D_6FD5_41C4_BB3430709714_0_1.jpg",
    "height": 1152,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_372E31A5_3B1D_6FD5_41C4_BB3430709714_0_2.jpg",
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_372E31A5_3B1D_6FD5_41C4_BB3430709714_0_3.jpg",
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF",
 {
  "id": "ImageResource_2A9058DC_3B07_1D7B_41C6_531578C00064",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF_0_0.jpg",
    "height": 1998,
    "class": "ImageResourceLevel",
    "width": 3551
   },
   {
    "url": "media/popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF_0_1.jpg",
    "height": 1152,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF_0_2.jpg",
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF_0_3.jpg",
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165",
 {
  "id": "ImageResource_58E53158_48E1_F1DC_41D0_5EE0346D0DCA",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165_0_0.jpg",
    "height": 1500,
    "class": "ImageResourceLevel",
    "width": 1500
   },
   {
    "url": "media/popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165_0_1.jpg",
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165_0_2.jpg",
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 {
  "id": "camera_5B3AE446_48DF_B734_41D2_23847BEF5348",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -97.93
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5B372462_48DF_B7EC_41B9_0D358E78FAC6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -110.56
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5B324478_48DF_B7DC_41C9_A6BB4F8C867C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 82.31
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5B2D3492_48DF_B72C_41B8_20350FC57BF6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 25.69
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5B28E4B3_48DF_B76C_41B8_6062AF92157E",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0.8
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5B23D4CF_48DF_B734_41A4_AAD27034DE7A",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 166.52
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5B1E24E4_48DF_B0F4_41BF_69B5A2531538",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 38.03
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5B186505_48DF_B134_41CE_92450FD85145",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -5.95
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5B13051B_48DF_B15D_41C8_B58A18E22EB7",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -64.09
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5B0D2525_48DF_B175_41BF_F03411F98CF7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -147.26
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5B07752F_48DF_B175_41C0_9334F8676768",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -92.13
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5B015539_48DF_B15D_41CD_9B628BDB2274",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 3.11
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CFBC544_48DF_B12B_41C1_6F747D3B0E2B",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -60.61
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CF5654E_48DF_B134_4191_021284EC1987",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -151.61
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CEEC557_48DF_B1D4_41C6_454F529A41B7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -164.11
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CE6B561_48DF_B1EC_41C9_B2586A249E9E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 117.58
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CDEE56C_48DF_B1F4_41D1_1200DC7379C6",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -31.62
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CD69577_48DF_B1D4_41BF_0249C35BAAF4",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -126.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CCE3581_48DF_B12C_41C3_E23FAFC898A8",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -102.16
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CC6558B_48DF_B13C_41A5_55F572E2CCB6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -161.87
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CBED595_48DF_B154_41D2_1C901521CD3D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -165.67
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CB6759F_48DF_B154_41C0_0CBFFEA26EE4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -160.96
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CAE15A9_48DF_B17C_41CD_1FE0A5ED40F1",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 134.73
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5CA5D5B4_48DF_B154_41D1_21C5D881B457",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -160.03
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5ABDF633_48DF_B36C_41B7_D0FA400D49B2",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -156.02
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5ABC263E_48DF_B354_41C1_454D6C825B21",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -68.11
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5AB95648_48DF_B33C_41A9_D8580A5C0A3A",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -170.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5AB67653_48DF_B32C_41CC_25024EA3B162",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 34.17
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5AB3465D_48DF_B3D4_41D1_49A33B6FE5A5",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 123.01
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5AB03667_48DF_B3F4_41C5_9006951F2C3D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 165.79
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5AACC673_48DF_B3EC_41C6_1091FF5834BE",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 1.36
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5AA9867E_48DF_B3D4_41C1_3CFC364FE649",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -109.16
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5AA61689_48DF_B33C_41CD_720C11134BF2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -18.54
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5AA2B693_48DF_B32C_41C8_5AEB978195D1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 147.61
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5AA0369E_48DF_B354_41AA_EFD6345A2FF4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 12.46
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A9C06A9_48DF_B37C_41C6_2CBE9107D126",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -178.51
  },
  "automaticZoomSpeed": 10
 },
 {
  "image": {
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_B64C568F_BD85_29CF_41E2_F9997BF3F5D0.jpg"
    }
   ],
   "class": "ImageResource"
  },
  "label": "Planta-de-Distribuci\u00f3n-Nivel-1",
  "thumbnailUrl": "media/photo_B64C568F_BD85_29CF_41E2_F9997BF3F5D0_t.jpg",
  "width": 1500,
  "height": 1500,
  "id": "photo_B64C568F_BD85_29CF_41E2_F9997BF3F5D0",
  "class": "Photo",
  "duration": 5000
 },
 {
  "image": {
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_B728384A_BD85_38B1_41E1_33C933E2F91F.jpg"
    }
   ],
   "class": "ImageResource"
  },
  "label": "Planta-de-Distribuci\u00f3n-Nivel-2",
  "thumbnailUrl": "media/photo_B728384A_BD85_38B1_41E1_33C933E2F91F_t.jpg",
  "width": 1500,
  "height": 1500,
  "id": "photo_B728384A_BD85_38B1_41E1_33C933E2F91F",
  "class": "Photo",
  "duration": 5000
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "top": 0,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "transitionMode": "blending",
  "borderRadius": 0,
  "paddingLeft": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "shadow": false,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "progressLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingBottom": 0,
  "playbackBarBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "playbackBarLeft": 0,
  "id": "MainViewer",
  "width": "100%",
  "playbackBarHeadHeight": 15,
  "borderSize": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "progressRight": 0,
  "toolTipShadowSpread": 0,
  "progressOpacity": 1,
  "paddingRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "height": "100%",
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "playbackBarBottom": 5,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "progressBottom": 0,
  "minHeight": 50,
  "progressHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingTop": 0,
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "left": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontStyle": "normal",
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#FFFFFF"
 },
 {
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": "18.033%",
  "paddingRight": 0,
  "bottom": "0%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "overflow": "scroll",
  "width": "100%",
  "horizontalAlign": "center",
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "children": [
   {
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "backgroundColorDirection": "vertical",
    "paddingRight": 0,
    "height": 77,
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingLeft": 0,
    "backgroundColorRatios": [
     0.8
    ],
    "minHeight": 77,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "shadow": false,
    "paddingTop": 0,
    "minWidth": 334,
    "class": "Container",
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "backgroundOpacity": 0.1,
    "overflow": "scroll",
    "backgroundColor": [
     "#000000"
    ],
    "paddingBottom": 0,
    "width": 334,
    "borderSize": 0,
    "horizontalAlign": "center",
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "children": [
     {
      "visible": false,
      "toolTipShadowBlurRadius": 3,
      "toolTipBorderSize": 1,
      "height": 50,
      "toolTipFontColor": "#606060",
      "paddingRight": 0,
      "toolTipPaddingTop": 4,
      "transparencyActive": true,
      "toolTipPaddingLeft": 6,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipBorderColor": "#767676",
      "toolTipBorderRadius": 3,
      "verticalAlign": "middle",
      "toolTipFontSize": 12,
      "toolTipTextShadowBlurRadius": 3,
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 1,
      "class": "IconButton",
      "toolTipPaddingBottom": 4,
      "pressedIconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9_pressed.png",
      "toolTipOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTip": "Info",
      "iconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9.png",
      "backgroundOpacity": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingRight": 6,
      "paddingBottom": 0,
      "cursor": "hand",
      "width": 75,
      "minHeight": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowSpread": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "id": "IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9",
      "toolTipShadowHorizontalLength": 0
     },
     {
      "toolTipShadowBlurRadius": 3,
      "toolTipBorderSize": 1,
      "height": 50,
      "toolTipFontColor": "#606060",
      "paddingRight": 0,
      "toolTipPaddingTop": 4,
      "transparencyActive": true,
      "toolTipPaddingLeft": 6,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipBorderColor": "#767676",
      "toolTipBorderRadius": 3,
      "minHeight": 1,
      "toolTipFontSize": 12,
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 1,
      "class": "IconButton",
      "toolTipPaddingBottom": 4,
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "toolTipOpacity": 1,
      "click": "this.mainPlayList.set('selectedIndex', 1)",
      "toolTipFontStyle": "normal",
      "toolTip": "Casa Modelo",
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "backgroundOpacity": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingRight": 6,
      "paddingBottom": 0,
      "cursor": "hand",
      "width": 75,
      "toolTipShadowHorizontalLength": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowSpread": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0"
     },
     {
      "toolTipShadowBlurRadius": 3,
      "toolTipBorderSize": 1,
      "height": 50,
      "toolTipFontColor": "#606060",
      "paddingRight": 0,
      "toolTipPaddingTop": 4,
      "transparencyActive": true,
      "toolTipPaddingLeft": 6,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipBorderColor": "#767676",
      "toolTipBorderRadius": 3,
      "minHeight": 1,
      "toolTipFontSize": 12,
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 1,
      "class": "IconButton",
      "toolTipPaddingBottom": 4,
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "toolTipOpacity": 1,
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else if(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "toolTipFontStyle": "normal",
      "toolTip": "Mapa",
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "backgroundOpacity": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingRight": 6,
      "paddingBottom": 0,
      "cursor": "hand",
      "width": 75,
      "toolTipShadowHorizontalLength": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowSpread": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2"
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ]
   }
  ]
 },
 {
  "scrollBarColor": "#000000",
  "visible": false,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": "77.049%",
  "paddingRight": 0,
  "top": "2.05%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Container",
  "scrollBarMargin": 2,
  "layout": "vertical",
  "backgroundOpacity": 0,
  "overflow": "scroll",
  "paddingBottom": 0,
  "width": "29.316%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "right": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "paddingRight": 0,
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingLeft": 0,
    "minHeight": 1,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "shadow": false,
    "paddingTop": 0,
    "minWidth": 1,
    "class": "Container",
    "scrollBarMargin": 2,
    "layout": "vertical",
    "backgroundOpacity": 0,
    "overflow": "scroll",
    "paddingBottom": 0,
    "width": "100%",
    "borderSize": 0,
    "horizontalAlign": "center",
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "children": [
     "this.MapViewer"
    ]
   }
  ]
 },
 {
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": "10%",
  "paddingRight": 0,
  "top": "0.96%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "overflow": "scroll",
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "left",
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "children": [
   {
    "gap": 0,
    "paddingRight": 5,
    "popUpFontColor": "#000000",
    "fontSize": 14,
    "backgroundColorDirection": "vertical",
    "borderSize": 0,
    "popUpBackgroundColor": "#FFFFFF",
    "fontColor": "#333333",
    "popUpBackgroundOpacity": 0.72,
    "fontFamily": "Arial",
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "prompt": "Ubicaciones",
    "fontStyle": "normal",
    "borderRadius": 4,
    "popUpShadowBlurRadius": 6,
    "paddingLeft": 5,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "height": "27.397%",
    "selectedPopUpFontColor": "#FFFFFF",
    "backgroundColorRatios": [
     0,
     1
    ],
    "fontWeight": "normal",
    "minHeight": 20,
    "popUpShadowColor": "#000000",
    "popUpShadowSpread": 1,
    "popUpShadowOpacity": 0,
    "shadow": false,
    "paddingTop": 0,
    "minWidth": 200,
    "class": "DropDown",
    "popUpBorderRadius": 0,
    "selectedPopUpBackgroundColor": "#0066FF",
    "arrowColor": "#0066FF",
    "backgroundOpacity": 0.72,
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "paddingBottom": 0,
    "arrowBeforeLabel": false,
    "textDecoration": "none",
    "width": "20.256%",
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "popUpShadow": false
   }
  ]
 },
 {
  "scrollBarColor": "#000000",
  "gap": 10,
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "height": "100%",
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "top": "0%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0
  ],
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "layout": "absolute",
  "backgroundOpacity": 0.3,
  "backgroundColor": [
   "#000000"
  ],
  "paddingBottom": 0,
  "overflow": "scroll",
  "width": "100%",
  "visible": false,
  "horizontalAlign": "left",
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "children": [
   {
    "scrollBarColor": "#000000",
    "gap": 10,
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "backgroundColorDirection": "vertical",
    "borderSize": 0,
    "top": "0%",
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingLeft": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "minHeight": 1,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "verticalAlign": "top",
    "shadow": false,
    "paddingTop": 0,
    "minWidth": 1,
    "class": "Container",
    "left": "0%",
    "scrollBarMargin": 2,
    "layout": "absolute",
    "backgroundOpacity": 1,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingBottom": 0,
    "overflow": "scroll",
    "width": "100%",
    "visible": false,
    "horizontalAlign": "left",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "children": [
     {
      "url": "skin/Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418.png",
      "borderSize": 0,
      "paddingRight": 0,
      "height": "20.69%",
      "top": "0.15%",
      "maxHeight": 396,
      "maxWidth": 394,
      "borderRadius": 0,
      "paddingLeft": 0,
      "minHeight": 40,
      "scaleMode": "fit_inside",
      "verticalAlign": "middle",
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 40,
      "class": "Image",
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "right": "0%",
      "backgroundOpacity": 0,
      "width": "13.658%",
      "paddingBottom": 0,
      "visible": false,
      "horizontalAlign": "center",
      "id": "Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418"
     },
     {
      "scrollBarColor": "#000000",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "29.693%",
      "paddingRight": 20,
      "bottom": "33.33%",
      "borderRadius": 0,
      "paddingLeft": 20,
      "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>Perspectivas con fines ilustrativos, pudiendo las mismas no reflejar de forma precisa el resultado real de la obra. Cons\u00faltenos por escala y dimensiones precisas de los espacios.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
      "minHeight": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "shadow": false,
      "paddingTop": 20,
      "minWidth": 1,
      "class": "HTMLText",
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "paddingBottom": 20,
      "width": "35.454%",
      "visible": false,
      "id": "HTMLText_33B241A5_3F38_83A8_41CB_51E88E1B489E",
      "right": "33.33%"
     }
    ]
   }
  ]
 },
 {
  "paddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0
  ],
  "minHeight": 0,
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 0,
  "class": "UIComponent",
  "left": 0,
  "backgroundOpacity": 0.55,
  "backgroundColor": [
   "#000000"
  ],
  "paddingBottom": 0,
  "right": 0,
  "visible": false,
  "id": "veilPopupPanorama"
 },
 {
  "paddingRight": 0,
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "backgroundColorRatios": [],
  "minHeight": 0,
  "scaleMode": "custom",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 0,
  "class": "ZoomImage",
  "left": 0,
  "backgroundOpacity": 1,
  "backgroundColor": [],
  "paddingBottom": 0,
  "right": 0,
  "visible": false,
  "id": "zoomImagePopupPanorama"
 },
 {
  "visible": false,
  "shadowColor": "#000000",
  "paddingRight": 5,
  "iconLineWidth": 5,
  "backgroundColorDirection": "vertical",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "fontFamily": "Arial",
  "top": 10,
  "fontColor": "#FFFFFF",
  "shadowBlurRadius": 6,
  "fontSize": 12,
  "fontStyle": "normal",
  "pressedIconColor": "#888888",
  "borderRadius": 0,
  "iconHeight": 20,
  "label": "",
  "paddingLeft": 5,
  "borderColor": "#000000",
  "gap": 5,
  "iconWidth": 20,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontWeight": "normal",
  "minHeight": 0,
  "rollOverIconColor": "#666666",
  "iconBeforeLabel": true,
  "mode": "push",
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 5,
  "shadowSpread": 1,
  "minWidth": 0,
  "class": "CloseButton",
  "layout": "horizontal",
  "backgroundOpacity": 0.3,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingBottom": 5,
  "cursor": "hand",
  "textDecoration": "none",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "closeButtonPopupPanorama",
  "right": 10,
  "iconColor": "#000000"
 }
], 
 "scrollBarColor": "#000000",
 "gap": 10,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_5B54F3DD_48DF_B0D4_41C6_900E0BA9FC83.set('selectedIndex', 0)",
 "borderSize": 0,
 "scripts": {
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "existsKey": function(key){    return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   this.MainViewer.set('toolTipEnabled', false);   var cardboardEnabled = this.isCardboardViewMode();   if(!cardboardEnabled) {       var zoomImage = this.zoomImagePopupPanorama;       var showDuration = popupPanoramaOverlay.get('showDuration');       var hideDuration = popupPanoramaOverlay.get('hideDuration');       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');       var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');       var showEndFunction = function() {           var loadedFunction = function(){               if(!self.isCardboardViewMode())                   popupPanoramaOverlay.set('visible', false);           };           popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', 1);           self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null,            closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);       };       var hideFunction = function() {           var restoreShowDurationFunction = function(){                popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);                popupPanoramaOverlay.set('visible', false);               popupPanoramaOverlay.set('showDuration', showDuration);               popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);               popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);           };           self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);           var currentWidth = zoomImage.get('imageWidth');           var currentHeight = zoomImage.get('imageHeight');           popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', hideDuration);           popupPanoramaOverlay.set('popupMaxWidth', currentWidth);           popupPanoramaOverlay.set('popupMaxHeight', currentHeight);          if(popupPanoramaOverlay.get('visible'))              restoreShowDurationFunction();          else              popupPanoramaOverlay.set('visible', true);           self.MainViewer.set('toolTipEnabled', true);       };       if(!imageHD){           imageHD = popupPanoramaOverlay.get('image');       }       if(!toggleImageHD && toggleImage){           toggleImageHD = toggleImage;       }       popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   } else {       var hideEndFunction = function() {           self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);           if(audio){               if(stopBackgroundAudio){                   self.resumeGlobalAudios();               }               self.stopGlobalAudio(audio);           }           popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self);           self.MainViewer.set('toolTipEnabled', true);       };       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               this.pauseGlobalAudios();           }           this.playGlobalAudio(audio);       }       popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true);   }   popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){    return window[key]; },
  "unregisterKey": function(key){    delete window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; }
 },
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "minWidth": 20,
 "class": "Player",
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "overflow": "visible",
 "paddingBottom": 0,
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "id": "rootPlayer"
})