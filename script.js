TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
          "backwardYaw": 54.94,
          "class": "AdjacentPanorama",
          "yaw": -15.87,
          "distance": 1
         }
        ],
        "label": "Panorama (7)",
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
            "id": "overlay_A37D3088_ADD0_2713_41A5_445BA54717A1",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8, this.camera_A429A2F6_AF27_D960_41E2_95FACCA6B04C); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_0_HS_1_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -15.87,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -1.75,
              "hfov": 6.59
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_0_HS_1_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.75,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -15.87,
              "hfov": 6.59
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_A302923C_ADD0_2B73_41BE_A98745835A75",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 9)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_0_HS_0_0.png",
                 "height": 110,
                 "class": "ImageResourceLevel",
                 "width": 110
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 50.24,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -2.18,
              "hfov": 6.63
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_0_HS_0_0_0_map.gif",
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 55
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -2.18,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 50.24,
              "hfov": 6.63
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_r.jpeg",
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
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_f.jpeg",
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
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_b.jpeg",
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
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_u.jpeg",
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
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_d.jpeg",
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
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_t.jpg",
        "mapLocations": [
         {
          "y": 97.59,
          "angle": 183.01,
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
              "x": 351.68,
              "height": 25,
              "y": 678.3,
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
              "y": 678.3,
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
              "x": 351.68
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
              "x": 340.37,
              "height": 25,
              "y": 639.83,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BDD12C0E_AE31_FF2F_41D8_E01744C9245E",
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
              "y": 639.83,
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
              "x": 340.37
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
              "x": 350.83,
              "height": 25,
              "y": 596.04,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BDD572A2_AE30_EB17_41E2_013B4E1D1816",
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
              "y": 596.04,
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
              "x": 350.83
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
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 376.92,
              "height": 25,
              "y": 606.79,
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
              "y": 606.79,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_3_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 376.92
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
              "x": 379.58,
              "height": 25,
              "y": 652.28,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BAAAD66C_AE30_6B13_41E4_41C4AF787B88",
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
              "y": 652.28,
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
              "x": 379.58
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
              "x": 216.46,
              "height": 25,
              "y": 85.09,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_B85AADD9_AE30_7935_418C_49774A3F1323",
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
              "y": 85.09,
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
              "x": 216.46
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
              "x": 264.72,
              "height": 25,
              "y": 658.9,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BAF4F184_AE30_2913_41D7_D5320C010656",
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
              "y": 658.9,
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
              "x": 264.72
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
              "x": 182.4,
              "height": 25,
              "y": 638.93,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BB8BD87E_AE30_27EF_41CD_3E50E37DC6C9",
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
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_7_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 182.4
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
              "x": 86.45,
              "height": 25,
              "y": 241.75,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_B861AF51_AE50_7935_41D1_7279F4D9342F",
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
              "y": 241.75,
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
              "x": 86.45
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
          "x": 228.96
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA"
       },
       "backwardYaw": -15.87,
       "class": "AdjacentPanorama",
       "yaw": 54.94,
       "distance": 1
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD",
             "backwardYaw": 76.96,
             "class": "AdjacentPanorama",
             "yaw": 19.41,
             "distance": 1
            },
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5",
                "backwardYaw": -3.75,
                "class": "AdjacentPanorama",
                "yaw": 62.05,
                "distance": 1
               },
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8",
                      "backwardYaw": -64.59,
                      "class": "AdjacentPanorama",
                      "yaw": -159.2,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9",
                         "backwardYaw": -62.32,
                         "class": "AdjacentPanorama",
                         "yaw": 108.38,
                         "distance": 1
                        }
                       ],
                       "label": "Panorama (20)",
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
                           "id": "overlay_BC8C16CD_ADF0_EB2D_41C5_20A00E46E646",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9, this.camera_A49874AB_AF27_D9E0_41DC_EC2C66B66A0C); this.mainPlayList.set('selectedIndex', 17)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_0_HS_0_0.png",
                                "height": 109,
                                "class": "ImageResourceLevel",
                                "width": 109
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": 108.38,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -33.64,
                             "hfov": 5.49
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_0_HS_0_0_0_map.gif",
                                "height": 54,
                                "class": "ImageResourceLevel",
                                "width": 54
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -33.64,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 108.38,
                             "hfov": 5.49
                            }
                           ]
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_r_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_r.jpeg",
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
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_f_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_f.jpeg",
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
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_b_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_b.jpeg",
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
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_u_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_u.jpeg",
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
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_d_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_d.jpeg",
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
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_l_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_t.jpg"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_t.jpg",
                       "mapLocations": [
                        {
                         "y": 234.28,
                         "angle": 128.72,
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
                             "x": 282.89,
                             "height": 25,
                             "y": 427.72,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B8F85CB0_AE70_3F73_41C3_DC7B01FC0984",
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
                             "y": 427.72,
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
                             "x": 282.89
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
                             "x": 54.31,
                             "height": 25,
                             "y": 478.64,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B9A37DAA_AE70_1917_41C7_01122E6A0AED",
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
                             "y": 478.64,
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
                             "x": 54.31
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
                             "x": 87.13,
                             "height": 25,
                             "y": 640.45,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B9B931CA_AE70_6916_41D9_A5584E238A36",
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
                             "y": 640.45,
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
                             "x": 87.13
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
                             "x": 245.54,
                             "height": 25,
                             "y": 594.06,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B98B7224_AE70_2B13_41D2_E4AA8B59B901",
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
                             "y": 594.06,
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
                             "x": 245.54
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
                             "x": 76.94,
                             "height": 25,
                             "y": 286.28,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B8C7E95D_AE70_192D_41E1_11DAC171E4FE",
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
                             "y": 286.28,
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
                             "x": 76.94
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
                             "x": 239.89,
                             "height": 25,
                             "y": 221.78,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B93268DD_AE71_E72D_41D4_1633A180488E",
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
                             "y": 221.78,
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
                             "x": 239.89
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
                             "x": 171.99,
                             "height": 25,
                             "y": 323.62,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B902B875_AE71_E7FD_41E1_C80DD5F6AC12",
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
                             "y": 323.62,
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
                             "x": 171.99
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
                             "x": 133.52,
                             "height": 25,
                             "y": 484.3,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B8C2A774_AE70_69FC_41E1_7E3B506459F7",
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
                             "y": 484.3,
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
                             "x": 133.52
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
                         "x": 252.39
                        }
                       ],
                       "hfovMin": 60,
                       "pitch": 0,
                       "id": "panorama_A401831D_ADD3_E932_41C4_911CB7E01D01"
                      },
                      "backwardYaw": 108.38,
                      "class": "AdjacentPanorama",
                      "yaw": -62.32,
                      "distance": 1
                     }
                    ],
                    "label": "Panorama (19)",
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
                        "id": "overlay_BCC0F5E6_ADF0_291F_41B4_306E7EB4ABFF",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_A401831D_ADD3_E932_41C4_911CB7E01D01, this.camera_A4497425_AF27_D8E0_41D3_0BC7F2E67099); this.mainPlayList.set('selectedIndex', 18)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_0_HS_1_0.png",
                             "height": 109,
                             "class": "ImageResourceLevel",
                             "width": 109
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -62.32,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -39.16,
                          "hfov": 5.11
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_0_HS_1_0_0_map.gif",
                             "height": 54,
                             "class": "ImageResourceLevel",
                             "width": 54
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -39.16,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -62.32,
                          "hfov": 5.11
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_BC7C5A18_ADF0_3B33_41E3_247D1C5F9555",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8, this.camera_A442B41A_AF27_D8A0_41D7_EED80175C2E7); this.mainPlayList.set('selectedIndex', 16)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_0_HS_0_0.png",
                             "height": 109,
                             "class": "ImageResourceLevel",
                             "width": 109
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -159.2,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -24.9,
                          "hfov": 5.98
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_0_HS_0_0_0_map.gif",
                             "height": 54,
                             "class": "ImageResourceLevel",
                             "width": 54
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -24.9,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -159.2,
                          "hfov": 5.98
                         }
                        ]
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_r_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_r.jpeg",
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
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_f_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_f.jpeg",
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
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_b_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_b.jpeg",
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
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_u_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_u.jpeg",
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
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_d_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_d.jpeg",
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
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_l_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_t.jpg",
                    "mapLocations": [
                     {
                      "y": 336.12,
                      "angle": 86.84,
                      "class": "PanoramaMapLocation",
                      "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                      "x": 184.49
                     }
                    ],
                    "hfovMin": 60,
                    "pitch": 0,
                    "id": "panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9"
                   },
                   "backwardYaw": -159.2,
                   "class": "AdjacentPanorama",
                   "yaw": -64.59,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
                   "backwardYaw": -15.4,
                   "class": "AdjacentPanorama",
                   "yaw": -8.86,
                   "distance": 1
                  }
                 ],
                 "label": "Panorama (18)",
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
                     "id": "overlay_BCCFE3CF_ADF0_292D_41E4_9F7157466BA3",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8, this.camera_A490D4A1_AF27_D9E0_41D0_61D5765B933F); this.mainPlayList.set('selectedIndex', 12)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_0_HS_1_0.png",
                          "height": 109,
                          "class": "ImageResourceLevel",
                          "width": 109
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -8.86,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -23.43,
                       "hfov": 6.05
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_0_HS_1_0_0_map.gif",
                          "height": 54,
                          "class": "ImageResourceLevel",
                          "width": 54
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -23.43,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -8.86,
                       "hfov": 6.05
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_BCBDDD92_ADF0_1937_4197_459058B21A8F",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9, this.camera_A488B497_AF27_D9A0_41D2_6EA1EB390994); this.mainPlayList.set('selectedIndex', 17)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_0_HS_0_0.png",
                          "height": 109,
                          "class": "ImageResourceLevel",
                          "width": 109
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -64.59,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -31.47,
                       "hfov": 5.62
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_0_HS_0_0_0_map.gif",
                          "height": 54,
                          "class": "ImageResourceLevel",
                          "width": 54
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -31.47,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -64.59,
                       "hfov": 5.62
                      }
                     ]
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_r.jpeg",
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
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_f.jpeg",
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
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_b.jpeg",
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
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_u.jpeg",
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
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_d.jpeg",
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
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_t.jpg",
                 "mapLocations": [
                  {
                   "y": 298.78,
                   "angle": 150.98,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "x": 89.44
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8"
                },
                "backwardYaw": -8.86,
                "class": "AdjacentPanorama",
                "yaw": -15.4,
                "distance": 1
               },
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
                   "backwardYaw": 120.8,
                   "class": "AdjacentPanorama",
                   "yaw": -3.73,
                   "distance": 1
                  }
                 ],
                 "label": "Panorama (15)",
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
                     "id": "overlay_BDE9F0F1_ADF0_68F2_41E2_69D1B2B49561",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8, this.camera_A406B341_AF27_D8A0_41D7_39883D6E03F0); this.mainPlayList.set('selectedIndex', 12)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_0_HS_0_0.png",
                          "height": 109,
                          "class": "ImageResourceLevel",
                          "width": 109
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -3.73,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -24.54,
                       "hfov": 6
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_0_HS_0_0_0_map.gif",
                          "height": 54,
                          "class": "ImageResourceLevel",
                          "width": 54
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -24.54,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -3.73,
                       "hfov": 6
                      }
                     ]
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_r.jpeg",
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
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_f.jpeg",
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
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_b.jpeg",
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
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_u.jpeg",
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
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_d.jpeg",
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
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_t.jpg",
                 "mapLocations": [
                  {
                   "y": 606.56,
                   "angle": -33.15,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "x": 258.04
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_A4025470_ADD0_6FF2_41B4_35877723A01B"
                },
                "backwardYaw": -3.73,
                "class": "AdjacentPanorama",
                "yaw": 120.8,
                "distance": 1
               },
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
                   "backwardYaw": -174.97,
                   "class": "AdjacentPanorama",
                   "yaw": 21.12,
                   "distance": 1
                  }
                 ],
                 "label": "Panorama (16)",
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
                     "id": "overlay_BDD075DD_ADF0_692D_41E2_D46334009310",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8, this.camera_A4344300_AF27_D8A0_41DE_D9FBF0497BBC); this.mainPlayList.set('selectedIndex', 12)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_0_HS_0_0.png",
                          "height": 109,
                          "class": "ImageResourceLevel",
                          "width": 109
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 21.12,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -23.44,
                       "hfov": 6.05
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_0_HS_0_0_0_map.gif",
                          "height": 54,
                          "class": "ImageResourceLevel",
                          "width": 54
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -23.44,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 21.12,
                       "hfov": 6.05
                      }
                     ]
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_r.jpeg",
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
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_f.jpeg",
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
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_b.jpeg",
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
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_u.jpeg",
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
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_d.jpeg",
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
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_t.jpg",
                 "mapLocations": [
                  {
                   "y": 652.95,
                   "angle": 0,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "x": 99.63
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B"
                },
                "backwardYaw": 21.12,
                "class": "AdjacentPanorama",
                "yaw": -174.97,
                "distance": 1
               },
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
                   "backwardYaw": -115.94,
                   "class": "AdjacentPanorama",
                   "yaw": 104.01,
                   "distance": 1
                  }
                 ],
                 "label": "Panorama (17)",
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
                     "id": "overlay_BD6FA9E1_ADF0_1915_41D6_903092E6EF3C",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8, this.camera_A4C1D4DC_AF27_D9A1_4155_122380FC017E); this.mainPlayList.set('selectedIndex', 12)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_0_HS_0_0.png",
                          "height": 109,
                          "class": "ImageResourceLevel",
                          "width": 109
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 104.01,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -40.69,
                       "hfov": 5
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_0_HS_0_0_0_map.gif",
                          "height": 54,
                          "class": "ImageResourceLevel",
                          "width": 54
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -40.69,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 104.01,
                       "hfov": 5
                      }
                     ]
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_r.jpeg",
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
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_f.jpeg",
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
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_b.jpeg",
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
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_u.jpeg",
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
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_d.jpeg",
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
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_t.jpg",
                 "mapLocations": [
                  {
                   "y": 491.14,
                   "angle": 0,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "x": 66.81
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2"
                },
                "backwardYaw": 104.01,
                "class": "AdjacentPanorama",
                "yaw": -115.94,
                "distance": 1
               }
              ],
              "label": "Panorama (14)",
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
                  "id": "overlay_A23D4101_ADF0_2915_41E5_5FCF6097293F",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5, this.camera_A46CE3C6_AF27_DFA0_41C1_B6EF31BC7964); this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_4_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 62.05,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -26.5,
                    "hfov": 5.9
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_4_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -26.5,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 62.05,
                    "hfov": 5.9
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_A21B873D_ADF0_6972_41CB_D6BD2832AE47",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A4025470_ADD0_6FF2_41B4_35877723A01B, this.camera_A47623E5_AF27_DF60_41D8_7403F003F5F2); this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_3_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 120.8,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -19.66,
                    "hfov": 6.21
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_3_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -19.66,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 120.8,
                    "hfov": 6.21
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_BD87E0F2_ADF0_28F6_41CF_AD1C04045013",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B, this.camera_A47CF3FB_AF27_DF60_41D5_B28DD807FAAF); this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_2_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -174.97,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -18.42,
                    "hfov": 6.25
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_2_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -18.42,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -174.97,
                    "hfov": 6.25
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_BD5B4E5D_ADF0_3B2D_41C8_62B60C37CD41",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2, this.camera_A47BA40A_AF27_D8A0_41E2_706B655F4AB4); this.mainPlayList.set('selectedIndex', 15)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_1_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -115.94,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -39.62,
                    "hfov": 5.08
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_1_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -39.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -115.94,
                    "hfov": 5.08
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_BD4F71DC_ADF0_E933_41D3_E6A5ECDAB743",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8, this.camera_A46983D5_AF27_DFA0_41E3_D097138B0598); this.mainPlayList.set('selectedIndex', 16)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_0_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -15.4,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -12.18,
                    "hfov": 6.44
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_0_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -12.18,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -15.4,
                    "hfov": 6.44
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_r.jpeg",
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
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_f.jpeg",
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
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_b.jpeg",
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
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_u.jpeg",
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
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_d.jpeg",
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
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_t.jpg",
              "mapLocations": [
               {
                "y": 496.8,
                "angle": 14.97,
                "class": "PanoramaMapLocation",
                "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                "x": 146.02
               }
              ],
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8"
             },
             "backwardYaw": 62.05,
             "class": "AdjacentPanorama",
             "yaw": -3.75,
             "distance": 1
            }
           ],
           "label": "Panorama (13)",
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
               "id": "overlay_A2380F1E_ADF0_192E_41B3_1E031AFB6C98",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD, this.camera_A4B83481_AF27_D9A0_41DC_96C69BB46998); this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_0_HS_1_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 19.41,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -23.1,
                 "hfov": 6.06
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_0_HS_1_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -23.1,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 19.41,
                 "hfov": 6.06
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_A22D5C70_ADF0_1FF2_41C2_9E2A5EF5646B",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8, this.camera_A480748C_AF27_D9A0_41BF_33301AF56D5A); this.mainPlayList.set('selectedIndex', 12)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_0_HS_0_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -3.75,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 3.22,
                 "hfov": 6.58
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_0_HS_0_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 3.22,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -3.75,
                 "hfov": 6.58
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_r.jpeg",
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
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_f.jpeg",
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
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_b.jpeg",
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
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_u.jpeg",
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
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_d.jpeg",
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
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_t.jpg",
           "mapLocations": [
            {
             "y": 436.83,
             "angle": 258.29,
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
                 "x": 56.52,
                 "height": 25,
                 "y": 388.12,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B8AFC1F0_AE70_E8F3_41DF_4DA851E12770",
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
                 "y": 388.12,
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
                 "x": 56.52
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
                 "x": 237.57,
                 "height": 25,
                 "y": 252.33,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B942F424_AE70_2F13_4182_5C003BEE434A",
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
                 "y": 252.33,
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
                 "x": 237.57
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
                 "x": 291.88,
                 "height": 25,
                 "y": 424.33,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B925714F_AE70_692D_4194_4B98DAECC533",
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
                 "y": 424.33,
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
                 "x": 291.88
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
             "x": 304.38
            },
            {
             "y": 440.22,
             "angle": 265.42,
             "class": "PanoramaMapLocation",
             "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
             "x": 295.39
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5"
          },
          "backwardYaw": 19.41,
          "class": "AdjacentPanorama",
          "yaw": 76.96,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD",
             "backwardYaw": 26.4,
             "class": "AdjacentPanorama",
             "yaw": -23.47,
             "distance": 1
            }
           ],
           "label": "Panorama (12)",
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
               "id": "overlay_A2986A60_ADF0_1B13_41D5_B73F52762C3B",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD, this.camera_A46603B5_AF27_DFE0_41CA_A6446F881B78); this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_0_HS_0_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -23.47,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -12.71,
                 "hfov": 6.43
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_0_HS_0_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -12.71,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -23.47,
                 "hfov": 6.43
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_r.jpeg",
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
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_f.jpeg",
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
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_b.jpeg",
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
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_u.jpeg",
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
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_d.jpeg",
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
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_t.jpg",
           "mapLocations": [
            {
             "y": 264.83,
             "angle": 245.29,
             "class": "PanoramaMapLocation",
             "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
             "x": 250.07
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415"
          },
          "backwardYaw": -23.47,
          "class": "AdjacentPanorama",
          "yaw": 26.4,
          "distance": 1
         },
         {
          "panorama": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
          "backwardYaw": 24.46,
          "class": "AdjacentPanorama",
          "yaw": 127.26,
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
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_A2A00329_ADF0_2915_41E0_65961AAA139C",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8, this.camera_A4393328_AF27_D8E0_41DC_B1C66702F229); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_2_0.png",
                 "height": 110,
                 "class": "ImageResourceLevel",
                 "width": 110
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 127.26,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -9.44,
              "hfov": 6.55
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_2_0_0_map.gif",
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 55
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -9.44,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 127.26,
              "hfov": 6.55
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_A261678B_ADF0_2915_41CF_2C70B2285780",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415, this.camera_A43E831E_AF27_D8A0_41D7_A51F2B077D33); this.mainPlayList.set('selectedIndex', 10)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_1_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 26.4,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -7.84,
              "hfov": 6.53
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_1_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -7.84,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 26.4,
              "hfov": 6.53
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_A276EFB4_ADF0_1972_41DA_F12EEA5D8FBB",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5, this.camera_A4321314_AF27_D8A0_41E2_E66DA4DABDC5); this.mainPlayList.set('selectedIndex', 11)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_0_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 76.96,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 6.29,
              "hfov": 6.55
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_0_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 6.29,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 76.96,
              "hfov": 6.55
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_r.jpeg",
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
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_f.jpeg",
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
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_b.jpeg",
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
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_u.jpeg",
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
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_d.jpeg",
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
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_t.jpg",
        "mapLocations": [
         {
          "y": 400.62,
          "angle": 14.84,
          "class": "PanoramaMapLocation",
          "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
          "x": 69.02
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD"
       },
       "backwardYaw": 127.26,
       "class": "AdjacentPanorama",
       "yaw": 24.46,
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
                "panorama": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3",
                "backwardYaw": 22.95,
                "class": "AdjacentPanorama",
                "yaw": 38,
                "distance": 1
               },
               {
                "panorama": "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41",
                "backwardYaw": 55.42,
                "class": "AdjacentPanorama",
                "yaw": 57,
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
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_A3CEC6A8_ADD0_2B13_41E2_682BF54827B6",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3, this.camera_A4E714B5_AF27_D9E0_41D3_2422F24B514E); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_0_HS_1_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 38,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 7.8,
                    "hfov": 6.53
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_0_HS_1_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 7.8,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 38,
                    "hfov": 6.53
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_A3FE2DD9_ADD0_3935_41D4_44D24E2A7CF1",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41, this.camera_A4E864BF_AF27_D9E0_41E0_800D4F00FF86); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_0_HS_0_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 57,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 12.33,
                    "hfov": 6.44
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_0_HS_0_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 12.33,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 57,
                    "hfov": 6.44
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_r.jpeg",
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
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_f.jpeg",
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
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_b.jpeg",
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
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_u.jpeg",
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
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_d.jpeg",
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
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_t.jpg",
              "mapLocations": [
               {
                "y": 664.78,
                "angle": -61.65,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "x": 392.08
               }
              ],
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E"
             },
             "backwardYaw": 57,
             "class": "AdjacentPanorama",
             "yaw": 55.42,
             "distance": 1
            },
            {
             "panorama": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3",
             "backwardYaw": -23.03,
             "class": "AdjacentPanorama",
             "yaw": -177.59,
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
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_A0288970_ADD0_19F4_41D8_21DE5722384C",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E, this.camera_A42362E2_AF27_D960_41DC_4AE2F8649610); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_0_HS_1_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 55.42,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -18.21,
                 "hfov": 6.26
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_0_HS_1_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -18.21,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 55.42,
                 "hfov": 6.26
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_A3D44904_ADD1_F913_4192_DD2302FD4D92",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3, this.camera_A42EB2EC_AF27_D960_41A5_8C0531B8D17E); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_0_HS_0_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -177.59,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -17.53,
                 "hfov": 6.29
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_0_HS_0_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -17.53,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -177.59,
                 "hfov": 6.29
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_r.jpeg",
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
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_f.jpeg",
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
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_b.jpeg",
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
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_u.jpeg",
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
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_d.jpeg",
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
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_t.jpg",
           "mapLocations": [
            {
             "y": 619.29,
             "angle": 108.31,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "x": 389.42
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41"
          },
          "backwardYaw": -177.59,
          "class": "AdjacentPanorama",
          "yaw": -23.03,
          "distance": 1
         },
         {
          "panorama": "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E",
          "backwardYaw": 38,
          "class": "AdjacentPanorama",
          "yaw": 22.95,
          "distance": 1
         },
         {
          "panorama": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
          "backwardYaw": 99.94,
          "class": "AdjacentPanorama",
          "yaw": 76.8,
          "distance": 1
         }
        ],
        "label": "Casa Club",
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
            "id": "overlay_A04D4B25_ADD0_191D_41D7_CAFE4290E592",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E, this.camera_A4599444_AF27_D8A0_41BC_2743C107E1DC); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_3_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 22.95,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -14.77,
              "hfov": 6.37
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_3_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -14.77,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 22.95,
              "hfov": 6.37
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_A070BC82_ADD0_1F17_41BC_11B2B63D4D28",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41, this.camera_A4519434_AF27_D8E0_41E2_64017231AA4E); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_2_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -23.03,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -19.12,
              "hfov": 6.23
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_2_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -19.12,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -23.03,
              "hfov": 6.23
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_A074F8C4_ADD0_2713_41D5_491BB22C7D8C",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8, this.camera_A4A19455_AF27_D8A0_41D5_447CC386634D); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_1_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 76.8,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -4.77,
              "hfov": 6.57
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_1_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -4.77,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 76.8,
              "hfov": 6.57
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_A06C7896_ADD0_273F_41DF_3EAEAA91D9EE",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 9)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_0_0.png",
                 "height": 110,
                 "class": "ImageResourceLevel",
                 "width": 110
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 121.03,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -0.44,
              "hfov": 6.64
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_0_0_0_map.gif",
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 55
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -0.44,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 121.03,
              "hfov": 6.64
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_r.jpeg",
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
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_f.jpeg",
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
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_b.jpeg",
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
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_u.jpeg",
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
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_d.jpeg",
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
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_t.jpg",
        "mapLocations": [
         {
          "y": 608.54,
          "angle": 141.72,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "x": 363.33
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_A40248C9_ADD0_2715_41C8_E32B862105D3"
       },
       "backwardYaw": 76.8,
       "class": "AdjacentPanorama",
       "yaw": 99.94,
       "distance": 1
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
          "backwardYaw": -34.51,
          "class": "AdjacentPanorama",
          "yaw": 17,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7",
                "backwardYaw": 8.04,
                "class": "AdjacentPanorama",
                "yaw": 13.5,
                "distance": 1
               }
              ],
              "label": "Area Infantil",
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
                  "id": "overlay_A2ECAB90_ADF0_3933_41D9_AA225A1CD59A",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7, this.camera_A41933A5_AF27_DFE0_41BC_FF6B554D3117); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_0_HS_1_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 13.5,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -1.79,
                    "hfov": 6.59
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_0_HS_1_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -1.79,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 13.5,
                    "hfov": 6.59
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_A286E94D_ADF0_1912_41E3_EA5E6F6A8D85",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_0_HS_0_0.png",
                       "height": 110,
                       "class": "ImageResourceLevel",
                       "width": 110
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 87.16,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -1.78,
                    "hfov": 6.63
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_0_HS_0_0_0_map.gif",
                       "height": 55,
                       "class": "ImageResourceLevel",
                       "width": 55
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -1.78,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 87.16,
                    "hfov": 6.63
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_r.jpeg",
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
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_f.jpeg",
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
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_b.jpeg",
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
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_u.jpeg",
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
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_d.jpeg",
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
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_t.jpg",
              "mapLocations": [
               {
                "y": 254.25,
                "angle": 159.52,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "x": 98.95
               }
              ],
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D"
             },
             "backwardYaw": 13.5,
             "class": "AdjacentPanorama",
             "yaw": 8.04,
             "distance": 1
            },
            {
             "panorama": "this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98",
             "backwardYaw": -130.93,
             "class": "AdjacentPanorama",
             "yaw": 143.91,
             "distance": 1
            }
           ],
           "label": "Panorama (9)",
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
               "id": "overlay_A3067F48_ADD0_1912_41D4_2D501265D899",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98, this.camera_A4B00476_AF27_D960_41CF_C6F4CA96DC02); this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_3_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 143.91,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.88,
                 "hfov": 6.57
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_3_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.88,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 143.91,
                 "hfov": 6.57
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_A2D3FFF9_ADD0_18F5_41B2_7C6A81D475F8",
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
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_2_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 120.78,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.09,
                 "hfov": 6.58
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_2_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.09,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 120.78,
                 "hfov": 6.58
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_A2FFF394_ADD0_6933_41BA_5382066DED4B",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_1_0.png",
                    "height": 110,
                    "class": "ImageResourceLevel",
                    "width": 110
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -61.08,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -1.85,
                 "hfov": 6.63
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_1_0_0_map.gif",
                    "height": 55,
                    "class": "ImageResourceLevel",
                    "width": 55
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -1.85,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -61.08,
                 "hfov": 6.63
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_A2D7654E_ADEF_E92F_41D1_79CBD4B6BBD8",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D, this.camera_A4A9E466_AF27_D960_41D2_9EF035B1BDD8); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_0_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 8.04,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -3.03,
                 "hfov": 6.58
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_0_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -3.03,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 8.04,
                 "hfov": 6.58
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_r.jpeg",
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
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_f.jpeg",
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
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_b.jpeg",
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
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_u.jpeg",
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
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_d.jpeg",
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
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_t.jpg",
           "mapLocations": [
            {
             "y": 651.43,
             "angle": -14.99,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "x": 194.9
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7"
          },
          "backwardYaw": 143.91,
          "class": "AdjacentPanorama",
          "yaw": -130.93,
          "distance": 1
         }
        ],
        "label": "Panorama (8)",
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
            "id": "overlay_A3677146_ADD0_291F_41CC_B51DFDF675DE",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8, this.camera_A4F044C9_AF27_D9A0_41C2_022F27DB82F8); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_0_HS_1_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 17,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -5.91,
              "hfov": 6.56
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_0_HS_1_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -5.91,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 17,
              "hfov": 6.56
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_A329FE89_ADD0_1B15_41D2_E8A9679EC7AE",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7, this.camera_A4F844D3_AF27_D9A7_41E1_E672C9211BAB); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_0_HS_0_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -130.93,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -4.97,
              "hfov": 6.57
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_0_HS_0_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -4.97,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -130.93,
              "hfov": 6.57
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_r.jpeg",
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
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_f.jpeg",
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
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_b.jpeg",
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
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_u.jpeg",
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
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_d.jpeg",
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
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_t.jpg",
        "mapLocations": [
         {
          "y": 671.4,
          "angle": 63.64,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "x": 277.22
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98"
       },
       "backwardYaw": 17,
       "class": "AdjacentPanorama",
       "yaw": -34.51,
       "distance": 1
      },
      {
       "panorama": "this.panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E",
       "backwardYaw": 17.14,
       "class": "AdjacentPanorama",
       "yaw": -135.06,
       "distance": 1
      }
     ],
     "label": "Acceso Principal",
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
         "id": "overlay_A1282E93_ADD3_FB35_41D4_1017567C5590",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E, this.camera_A41CB395_AF27_DFA0_41CA_781ECC52FC16); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_4_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -135.06,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -13.71,
           "hfov": 6.4
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_4_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -13.71,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -135.06,
           "hfov": 6.4
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_A094A325_ADD0_2912_41DA_3775A88D338E",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98, this.camera_A417F385_AF27_DFA0_41D5_816390D4A4D1); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_3_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -34.51,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -6.02,
           "hfov": 6.56
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_3_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -6.02,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -34.51,
           "hfov": 6.56
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_A05CE822_ADD0_2717_41CA_272BFDE30489",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3, this.camera_A40A7374_AF27_DF60_41D3_75B49F899FEF); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_2_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 99.94,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -2.1,
           "hfov": 6.59
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_2_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.1,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 99.94,
           "hfov": 6.59
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_A0BF80BE_ADD0_276F_41C9_5403F3936E02",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD, this.camera_A40D0363_AF27_DF60_41E4_9396C141B892); this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_1_0.png",
              "height": 110,
              "class": "ImageResourceLevel",
              "width": 110
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 24.46,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -1.59,
           "hfov": 6.63
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_1_0_0_map.gif",
              "height": 55,
              "class": "ImageResourceLevel",
              "width": 55
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.59,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 24.46,
           "hfov": 6.63
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_A3B164A7_ADD0_2F1D_41E2_333AC82E06ED",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA, this.camera_A4015352_AF27_D8A0_41C6_6B61CF7BC076); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_0_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 54.94,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -2.91,
           "hfov": 6.58
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_0_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.91,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 54.94,
           "hfov": 6.58
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_r.jpeg",
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
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_f.jpeg",
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
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_b.jpeg",
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
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_u.jpeg",
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
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_d.jpeg",
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
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_t.jpg",
     "mapLocations": [
      {
       "y": 652.33,
       "angle": 307.32,
       "class": "PanoramaMapLocation",
       "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
       "x": 352.87
      }
     ],
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8"
    },
    "backwardYaw": -135.06,
    "class": "AdjacentPanorama",
    "yaw": 17.14,
    "distance": 1
   }
  ],
  "label": "Panorama (2)",
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
      "id": "overlay_A1E06EB1_ADD0_7B75_41C3_986903E63881",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8, this.camera_A430C30A_AF27_D8A0_41E5_5FA24529A08C); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_0_HS_0_0.png",
           "height": 109,
           "class": "ImageResourceLevel",
           "width": 109
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 17.14,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -10.05,
        "hfov": 6.49
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_0_HS_0_0_0_map.gif",
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.05,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 17.14,
        "hfov": 6.49
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_r.jpeg",
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
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_f.jpeg",
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
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_b.jpeg",
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
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_u.jpeg",
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
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_d.jpeg",
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
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_t.jpg",
  "mapLocations": [
   {
    "y": 690.8,
    "angle": -28.57,
    "class": "PanoramaMapLocation",
    "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
    "x": 364.18
   }
  ],
  "hfovMin": 60,
  "pitch": 0,
  "id": "panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E"
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
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
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowVerticalLength": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
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
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowSpread": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
  },
  "touchControlMode": "drag_acceleration",
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
   "toolTipShadowHorizontalLength": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "toolTipFontFamily": "Arial",
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "toolTipBorderRadius": 3,
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
   "width": "99.417%",
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
   "playbackBarHeadShadowHorizontalLength": 0,
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
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarBorderColor": "#FFFFFF"
  },
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "movementMode": "constrained"
 },
 {
  "id": "panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_camera",
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
 "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
 {
  "id": "panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_camera",
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
 "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3",
 {
  "id": "panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_camera",
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
 "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41",
 {
  "id": "panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_camera",
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
 "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E",
 {
  "id": "panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_camera",
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
 "this.panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA",
 {
  "id": "panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_camera",
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
 "this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98",
 {
  "id": "panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_camera",
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
 "this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7",
 {
  "id": "panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_camera",
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
 "this.panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D",
 {
  "id": "panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_camera",
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
 "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD",
 {
  "id": "panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_camera",
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
 "this.panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415",
 {
  "id": "panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_camera",
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
 "this.panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5",
 {
  "id": "panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_camera",
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
 "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
 {
  "id": "panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_camera",
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
 "this.panorama_A4025470_ADD0_6FF2_41B4_35877723A01B",
 {
  "id": "panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_camera",
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
 "this.panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B",
 {
  "id": "panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_camera",
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
 "this.panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2",
 {
  "id": "panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_camera",
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
 "this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8",
 {
  "id": "panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_camera",
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
 "this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9",
 {
  "id": "panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_camera",
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
 "this.panorama_A401831D_ADD3_E932_41C4_911CB7E01D01",
 {
  "id": "panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_camera",
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
    "media": "this.panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DE42CA_AF27_D9A0_41D0_0C55580ADE2A, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DE42CA_AF27_D9A0_41D0_0C55580ADE2A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DE12CA_AF27_D9A0_41D6_3D471CDAD8D5, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DE12CA_AF27_D9A0_41D6_3D471CDAD8D5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_camera",
    "end": "if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A4C154DD_AF27_D9A3_41D6_505B01C6810A, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18, 'showEffect', false)"
   },
   {
    "media": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DFD2CB_AF27_D9A0_41CD_F3EBDCEE4DB4, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DFD2CB_AF27_D9A0_41CD_F3EBDCEE4DB4",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DF72CB_AF27_D9A0_41D6_BBD733467967, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DF72CB_AF27_D9A0_41D6_BBD733467967",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DF32CB_AF27_D9A0_41D7_D98FD703C966, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DF32CB_AF27_D9A0_41D7_D98FD703C966",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5D8C2CC_AF27_D9A0_41D4_A53B8CD90C6A, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5D8C2CC_AF27_D9A0_41D4_A53B8CD90C6A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5D882CC_AF27_D9A0_41DC_D5CD96326B4E, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5D882CC_AF27_D9A0_41DC_D5CD96326B4E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5D852CC_AF27_D9A0_4186_48E9BACDCCBD, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5D852CC_AF27_D9A0_4186_48E9BACDCCBD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5D9E2CC_AF27_D9A0_41C5_33AF73033BE9, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5D9E2CC_AF27_D9A0_41C5_33AF73033BE9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5D9A2CD_AF27_D9A0_41E5_48FF2A3678CB, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5D9A2CD_AF27_D9A0_41E5_48FF2A3678CB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_camera",
    "end": "if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A4C254DE_AF27_D9A0_41B7_E5BEEDF6AC1E, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2, 'hideEffect', false)"
   },
   {
    "media": "this.panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5D972CD_AF27_D9A0_41E0_CAC12CE07C88, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5D972CD_AF27_D9A0_41E0_CAC12CE07C88",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "media": "this.panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5D932CD_AF27_D9A0_41E2_15614D9DFB68, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5D932CD_AF27_D9A0_41E2_15614D9DFB68",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "media": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DAD2CD_AF27_D9A0_41D6_A63BEBC1DFE9, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DAD2CD_AF27_D9A0_41D6_A63BEBC1DFE9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "media": "this.panorama_A4025470_ADD0_6FF2_41B4_35877723A01B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DA92CE_AF27_D9A0_4196_9EF094DDCB3B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DA92CE_AF27_D9A0_4196_9EF094DDCB3B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "media": "this.panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DA22CE_AF27_D9A0_41DB_1C50E5264AEE, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DA22CE_AF27_D9A0_41DB_1C50E5264AEE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "media": "this.panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DBE2CE_AF27_D9A0_41D1_7C28C2880107, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DBE2CE_AF27_D9A0_41D1_7C28C2880107",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "media": "this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DBA2CF_AF27_D9A0_41DA_5FEF39793408, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DBA2CF_AF27_D9A0_41DA_5FEF39793408",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "media": "this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DB42CF_AF27_D9A0_4171_15E80029BCF3, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DB42CF_AF27_D9A0_4171_15E80029BCF3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "media": "this.panorama_A401831D_ADD3_E932_41C4_911CB7E01D01",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A5DB12CF_AF27_D9A0_41CD_8A87C155D512, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_A5DB12CF_AF27_D9A0_41CD_8A87C155D512",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_camera",
    "end": "if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A4C314DF_AF27_D9A0_41E2_79EE1F69C6AC, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18, 'showEffect', false)"
   },
   {
    "media": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2)"
   },
   {
    "media": "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)"
   },
   {
    "media": "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4)"
   },
   {
    "media": "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_camera",
    "end": "if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A4CC74DF_AF27_D9A0_41E5_47790D0CDC39, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 0); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2, 'hideEffect', false)"
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
  "id": "playList_A5DD12CA_AF27_D9A0_41E1_59653335E422",
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
  "id": "playList_A5DEF2CA_AF27_D9A0_41CA_0B2FB7E45040",
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
  "id": "playList_A5DEC2CA_AF27_D9A0_41B0_EEF4BE1888C3",
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
 {
  "id": "camera_A42362E2_AF27_D960_41DC_4AE2F8649610",
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
   "yaw": -123
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A42EB2EC_AF27_D960_41A5_8C0531B8D17E",
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
   "yaw": 156.97
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A429A2F6_AF27_D960_41E2_95FACCA6B04C",
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
   "yaw": -125.06
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4344300_AF27_D8A0_41DE_D9FBF0497BBC",
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
   "yaw": 5.03
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A430C30A_AF27_D8A0_41E5_5FA24529A08C",
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
   "yaw": 44.94
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4321314_AF27_D8A0_41E2_E66DA4DABDC5",
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
   "yaw": -160.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A43E831E_AF27_D8A0_41D7_A51F2B077D33",
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
   "yaw": 156.53
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4393328_AF27_D8E0_41DC_B1C66702F229",
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
   "yaw": -155.54
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A406B341_AF27_D8A0_41D7_39883D6E03F0",
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
   "yaw": -59.2
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4015352_AF27_D8A0_41C6_6B61CF7BC076",
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
   "yaw": 164.13
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A40D0363_AF27_DF60_41E4_9396C141B892",
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
   "yaw": -52.74
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A40A7374_AF27_DF60_41D3_75B49F899FEF",
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
   "yaw": -103.2
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A417F385_AF27_DFA0_41D5_816390D4A4D1",
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
   "yaw": -163
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A41CB395_AF27_DFA0_41CA_781ECC52FC16",
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
   "yaw": -162.86
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A41933A5_AF27_DFE0_41BC_FF6B554D3117",
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
   "yaw": -171.96
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A46603B5_AF27_DFE0_41CA_A6446F881B78",
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
   "yaw": -153.6
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A46CE3C6_AF27_DFA0_41C1_B6EF31BC7964",
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
   "yaw": 176.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A46983D5_AF27_DFA0_41E3_D097138B0598",
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
   "yaw": 171.14
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A47623E5_AF27_DF60_41D8_7403F003F5F2",
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
   "yaw": 176.27
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A47CF3FB_AF27_DF60_41D5_B28DD807FAAF",
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
   "yaw": -158.88
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A47BA40A_AF27_D8A0_41E2_706B655F4AB4",
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
   "yaw": -75.99
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A442B41A_AF27_D8A0_41D7_EED80175C2E7",
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
   "yaw": 115.41
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4497425_AF27_D8E0_41D3_0BC7F2E67099",
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
   "yaw": -71.62
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4519434_AF27_D8E0_41E2_64017231AA4E",
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
   "yaw": 2.41
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4599444_AF27_D8A0_41BC_2743C107E1DC",
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
   "yaw": -142
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4A19455_AF27_D8A0_41D5_447CC386634D",
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
   "yaw": -80.06
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4A9E466_AF27_D960_41D2_9EF035B1BDD8",
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
   "yaw": -166.5
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4B00476_AF27_D960_41CF_C6F4CA96DC02",
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
   "yaw": 49.07
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4B83481_AF27_D9A0_41DC_96C69BB46998",
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
   "yaw": -103.04
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A480748C_AF27_D9A0_41BF_33301AF56D5A",
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
   "yaw": -117.95
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A488B497_AF27_D9A0_41D2_6EA1EB390994",
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
   "yaw": 20.8
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A490D4A1_AF27_D9E0_41D0_61D5765B933F",
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
   "yaw": 164.6
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A49874AB_AF27_D9E0_41DC_EC2C66B66A0C",
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
   "yaw": 117.68
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4E714B5_AF27_D9E0_41D3_2422F24B514E",
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
   "yaw": -157.05
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4E864BF_AF27_D9E0_41E0_800D4F00FF86",
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
   "yaw": -124.58
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4F044C9_AF27_D9A0_41C2_022F27DB82F8",
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
   "yaw": 145.49
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4F844D3_AF27_D9A7_41E1_E672C9211BAB",
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
   "yaw": -36.09
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_A4C1D4DC_AF27_D9A1_4155_122380FC017E",
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
   "yaw": 64.06
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18",
 {
  "id": "effect_A4C154DD_AF27_D9A3_41D6_505B01C6810A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_A4C254DE_AF27_D9A0_41B7_E5BEEDF6AC1E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2",
 "this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18",
 "this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18",
 {
  "id": "effect_A4C314DF_AF27_D9A0_41E2_79EE1F69C6AC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2",
 {
  "id": "effect_A4CC74DF_AF27_D9A0_41E5_47790D0CDC39",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2"
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
  "toolTipShadowHorizontalLength": 0,
  "paddingLeft": 0,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
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
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
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
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowVerticalLength": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
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
      "iconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9.png",
      "toolTipOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTip": "Info",
      "pressedIconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9_pressed.png",
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
      "id": "IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9"
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
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowVerticalLength": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
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
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "toolTipOpacity": 1,
      "click": "this.mainPlayList.set('selectedIndex', 9)",
      "toolTipFontStyle": "normal",
      "toolTip": "Casa Modelo",
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "backgroundOpacity": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingRight": 6,
      "paddingBottom": 0,
      "cursor": "hand",
      "width": 75,
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
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowVerticalLength": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
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
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "toolTipOpacity": 1,
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else if(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "toolTipFontStyle": "normal",
      "toolTip": "Map",
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "backgroundOpacity": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingRight": 6,
      "paddingBottom": 0,
      "cursor": "hand",
      "width": 75,
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
    "height": "81.45%",
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
    "prompt": "Location List",
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
  "fontFamily": "Arial",
  "fontSize": 20,
  "height": "10%",
  "paddingRight": 0,
  "textShadowVerticalLength": 1,
  "visible": false,
  "top": "0%",
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "fontWeight": "normal",
  "minHeight": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Label",
  "textShadowBlurRadius": 3,
  "left": "0%",
  "textShadowHorizontalLength": 1,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "text": "La Lima Free Zone",
  "textDecoration": "none",
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "textShadowOpacity": 1
 },
 {
  "fontFamily": "Arial",
  "fontSize": 20,
  "height": "10%",
  "paddingRight": 0,
  "textShadowVerticalLength": 1,
  "visible": false,
  "top": "0%",
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "fontWeight": "normal",
  "minHeight": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Label",
  "textShadowBlurRadius": 3,
  "left": "0%",
  "textShadowHorizontalLength": 1,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "text": "Cartago City",
  "textDecoration": "none",
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "textShadowOpacity": 1
 },
 {
  "fontFamily": "Arial",
  "fontSize": 20,
  "height": "13.108%",
  "paddingRight": 0,
  "textShadowVerticalLength": 1,
  "visible": false,
  "top": "0%",
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "fontWeight": "normal",
  "minHeight": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Label",
  "textShadowBlurRadius": 3,
  "left": "0%",
  "textShadowHorizontalLength": 1,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "text": "Corporate Center Project",
  "textDecoration": "none",
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "textShadowOpacity": 1
 },
 {
  "fontFamily": "Arial",
  "fontSize": 20,
  "height": "3.5%",
  "paddingRight": 0,
  "textShadowVerticalLength": 1,
  "visible": false,
  "top": "6%",
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "fontWeight": "normal",
  "minHeight": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Label",
  "textShadowBlurRadius": 3,
  "left": "0%",
  "textShadowHorizontalLength": 1,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "text": "Corporate Building",
  "textDecoration": "none",
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "textShadowOpacity": 1
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
    "height": "91.081%",
    "backgroundColorDirection": "vertical",
    "borderSize": 0,
    "bottom": "3.11%",
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
    "left": "4.32%",
    "scrollBarMargin": 2,
    "layout": "absolute",
    "backgroundOpacity": 0.3,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingBottom": 0,
    "overflow": "scroll",
    "width": "91.341%",
    "horizontalAlign": "left",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "children": [
     {
      "url": "https://www.xline3d.com/360/lalimav6.html",
      "paddingRight": 0,
      "height": "100%",
      "backgroundColorDirection": "vertical",
      "borderSize": 0,
      "top": "0%",
      "insetBorder": false,
      "borderRadius": 0,
      "paddingLeft": 0,
      "backgroundColorRatios": [
       0
      ],
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 1,
      "class": "WebFrame",
      "backgroundOpacity": 1,
      "scrollEnabled": true,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingBottom": 0,
      "width": "99.907%",
      "right": "0%",
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21"
     },
     {
      "url": "skin/Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418.png",
      "borderSize": 0,
      "paddingRight": 0,
      "height": "10.979%",
      "top": "0%",
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
      "width": "6.97%",
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "id": "Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418"
     }
    ]
   }
  ]
 }
], 
 "scrollBarColor": "#000000",
 "gap": 10,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_A5DD12CA_AF27_D9A0_41E1_59653335E422.set('selectedIndex', 0)",
 "borderSize": 0,
 "scripts": {
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "registerKey": function(key, value){    window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "unregisterKey": function(key){    delete window[key]; },
  "getKey": function(key){    return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "existsKey": function(key){    return key in window; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
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