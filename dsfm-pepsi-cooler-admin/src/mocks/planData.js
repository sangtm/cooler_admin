export default {
  plan_sid: "000064d4-37a1-4a6a-aaaf-fbc9702d7e49",
  pg_sid: "176837f9-ddd3-4399-b9fa-2b618939821d",
  data: {
    sid: "000064d4-37a1-4a6a-aaaf-fbc9702d7e49",
    store: {
      code: "S0_C11305161",
      name: "C11305161",
      address:
        "21 Đường A khu ADC, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh",
      lat: "16.03227900",
      lng: "107.87593600",
      regionCode: "tphochiminh",
      numCooler: 1,
      status: null,
    },
    trackingTime: null,
    issues: {
      CHECKIN: {
        issue_name: "Checkin",
        issue_key: "CHECKIN",
        done: false,
        store_status: ["SUCCESS", "UNSUCCESS"],
        validate: {
          required: true,
        },
        value: {
          lat: null,
          lng: null,
        },
      },
      CAMERA: {
        issue_name: "Camera",
        issue_key: "CAMERA",
        done: false,
        store_status: ["SUCCESS", "UNSUCCESS"],
        validate: {
          required: true,
        },
        items: [
          {
            type_id: 111,
            type_name: "Hình tổng quan cửa hàng",
            store_status: ["SUCCESS", "UNSUCCESS"],
            validate: {
              required: true,
              min: 1,
              max: 5,
            },
            value: [],
          },
          {
            type_id: 112,
            type_name: "Hình selfie",
            store_status: ["SUCCESS", "UNSUCCESS"],
            validate: {
              required: true,
              min: 1,
              max: 5,
            },
            value: [],
          },
          {
            type_id: 113,
            type_name: "Hình cuộc gọi và tin nhắn với DCR/SS",
            store_status: ["SUCCESS", "UNSUCCESS"],
            validate: {
              required: false,
              min: 1,
              max: 5,
            },
            value: [],
          },
        ],
      },
      COOLER: {
        issue_name: "Cooler",
        issue_key: "COOLER",
        done: false,
        store_status: ["SUCCESS"],
        validate: {
          required: true,
        },
        items: [
          {
            cooler_key: 1597593400,
            questionnaires: [
              {
                component_type: "SELECT",
                keyboard_type: "default",
                component_code: "question_4",
                show: true,
                label: "Kiểm tra hiện diện tủ",
                validate: {
                  required: true,
                },
                default_value: null,
                value: null,
                options: [
                  {
                    value: "key-co-tu",
                    label: "Có tủ",
                  },
                  {
                    value: "key-khong-co-tu",
                    label: "Không có tủ tại quán",
                  },
                  {
                    value: "key-tu-di-doi",
                    label: "Tủ đã di dời",
                  },
                ],
                actions: {
                  "key-co-tu": {
                    show: ["question_5", "question_5.1"],
                  },
                  "key-khong-co-tu": {
                    show: ["screenshot_call_history"],
                  },
                  "key-tu-di-doi": {
                    show: ["new_address"],
                  },
                },
              },
              {
                component_type: "TEXTAREA",
                keyboard_type: "default",
                component_code: "field_note_cooler",
                show: true,
                label: "Nhập ghi chú (nếu có)",
                validate: {
                  required: false,
                },
                default_value: null,
                value: null,
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "screenshot_call_history",
                show: false,
                type_id: 114,
                type_name: "Gọi DCR/SS và chụp màn hình",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
              {
                component_type: "TEXTAREA",
                keyboard_type: "default",
                component_code: "new_address",
                show: false,
                label: "Nhập địa chỉ di dời tủ",
                validate: {
                  required: true,
                },
                default_value: null,
                value: null,
              },
              {
                component_type: "SELECT",
                keyboard_type: "default",
                component_code: "question_5",
                show: false,
                label: "Loại tủ",
                validate: {
                  required: true,
                },
                default_value: null,
                value: null,
                options: [
                  {
                    value: "key-fub",
                    label: "FUB",
                  },
                  {
                    value: "key-pmx",
                    label: "PMX",
                  },
                  {
                    value: "key-vc",
                    label: "VC",
                  },
                  {
                    value: "key-vm",
                    label: "VM",
                  },
                ],
                actions: {},
              },
              {
                component_type: "SELECT",
                keyboard_type: "default",
                component_code: "question_5.1",
                show: false,
                label: "Loại mã tài sản của tủ",
                validate: {
                  required: true,
                },
                default_value: null,
                value: null,
                options: [
                  {
                    value: "key-qr",
                    label: "QR",
                  },
                  {
                    value: "key-inox",
                    label: "INOX",
                  },
                ],
                actions: {
                  "key-qr": {
                    show: [
                      "question_6",
                      "question_6.1",
                      "question_6.2",
                      "question_6.3",
                      "question_6.4",
                    ],
                  },
                  "key-inox": {
                    show: ["question_7", "question_7.1", "question_7.2"],
                  },
                },
              },
              {
                component_type: "SCAN_QR",
                keyboard_type: "default",
                component_code: "question_6",
                show: false,
                type_id: 115,
                type_name: "Scan QR",
                validate: {
                  required: false,
                  min: 1,
                  max: 1,
                },
                value: [],
              },
              {
                component_type: "TEXT",
                keyboard_type: "default",
                component_code: "question_6.1",
                show: false,
                label: "Nhập mã QR trên tủ",
                validate: {
                  required: false,
                },
                default_value: null,
                value: null,
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "question_6.2",
                show: false,
                type_id: 116,
                type_name: "Chụp hình QR bên ngoài tủ (thấy rõ mã code)",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "question_6.3",
                show: false,
                type_id: 117,
                type_name: "Chụp hình QR bên trong tủ (thấy rõ mã code)",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "question_6.4",
                show: false,
                type_id: 118,
                type_name: "Chụp hình tổng quan tủ lạnh",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
              {
                component_type: "TEXT",
                keyboard_type: "default",
                component_code: "question_7",
                show: false,
                label: "Nhập mã inox trên tủ",
                validate: {
                  required: false,
                },
                default_value: null,
                value: null,
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "question_7.1",
                show: false,
                type_id: 119,
                type_name: "Chụp hình mã inox (thấy rõ mã code)",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "question_7.2",
                show: false,
                type_id: 120,
                type_name: "Chụp hình tổng quan tủ lạnh",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
            ],
          },
          {
            cooler_key: 15975934001,
            questionnaires: [
              {
                component_type: "SELECT",
                keyboard_type: "default",
                component_code: "question_4",
                show: true,
                label: "Kiểm tra hiện diện tủ",
                validate: {
                  required: true,
                },
                default_value: null,
                value: null,
                options: [
                  {
                    value: "key-co-tu",
                    label: "Có tủ",
                  },
                  {
                    value: "key-khong-co-tu",
                    label: "Không có tủ tại quán",
                  },
                  {
                    value: "key-tu-di-doi",
                    label: "Tủ đã di dời",
                  },
                ],
                actions: {
                  "key-co-tu": {
                    show: ["question_5", "question_5.1"],
                  },
                  "key-khong-co-tu": {
                    show: ["screenshot_call_history"],
                  },
                  "key-tu-di-doi": {
                    show: ["new_address"],
                  },
                },
              },
              {
                component_type: "TEXTAREA",
                keyboard_type: "default",
                component_code: "field_note_cooler",
                show: true,
                label: "Nhập ghi chú (nếu có)",
                validate: {
                  required: false,
                },
                default_value: null,
                value: null,
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "screenshot_call_history",
                show: false,
                type_id: 114,
                type_name: "Gọi DCR/SS và chụp màn hình",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
              {
                component_type: "TEXTAREA",
                keyboard_type: "default",
                component_code: "new_address",
                show: false,
                label: "Nhập địa chỉ di dời tủ",
                validate: {
                  required: true,
                },
                default_value: null,
                value: null,
              },
              {
                component_type: "SELECT",
                keyboard_type: "default",
                component_code: "question_5",
                show: false,
                label: "Loại tủ",
                validate: {
                  required: true,
                },
                default_value: null,
                value: null,
                options: [
                  {
                    value: "key-fub",
                    label: "FUB",
                  },
                  {
                    value: "key-pmx",
                    label: "PMX",
                  },
                  {
                    value: "key-vc",
                    label: "VC",
                  },
                  {
                    value: "key-vm",
                    label: "VM",
                  },
                ],
                actions: {},
              },
              {
                component_type: "SELECT",
                keyboard_type: "default",
                component_code: "question_5.1",
                show: false,
                label: "Loại mã tài sản của tủ",
                validate: {
                  required: true,
                },
                default_value: null,
                value: null,
                options: [
                  {
                    value: "key-qr",
                    label: "QR",
                  },
                  {
                    value: "key-inox",
                    label: "INOX",
                  },
                ],
                actions: {
                  "key-qr": {
                    show: [
                      "question_6",
                      "question_6.1",
                      "question_6.2",
                      "question_6.3",
                      "question_6.4",
                    ],
                  },
                  "key-inox": {
                    show: ["question_7", "question_7.1", "question_7.2"],
                  },
                },
              },
              {
                component_type: "SCAN_QR",
                keyboard_type: "default",
                component_code: "question_6",
                show: false,
                type_id: 115,
                type_name: "Scan QR",
                validate: {
                  required: false,
                  min: 1,
                  max: 1,
                },
                value: [],
              },
              {
                component_type: "TEXT",
                keyboard_type: "default",
                component_code: "question_6.1",
                show: false,
                label: "Nhập mã QR trên tủ",
                validate: {
                  required: false,
                },
                default_value: null,
                value: null,
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "question_6.2",
                show: false,
                type_id: 116,
                type_name: "Chụp hình QR bên ngoài tủ (thấy rõ mã code)",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "question_6.3",
                show: false,
                type_id: 117,
                type_name: "Chụp hình QR bên trong tủ (thấy rõ mã code)",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "question_6.4",
                show: false,
                type_id: 118,
                type_name: "Chụp hình tổng quan tủ lạnh",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
              {
                component_type: "TEXT",
                keyboard_type: "default",
                component_code: "question_7",
                show: false,
                label: "Nhập mã inox trên tủ",
                validate: {
                  required: false,
                },
                default_value: null,
                value: null,
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "question_7.1",
                show: false,
                type_id: 119,
                type_name: "Chụp hình mã inox (thấy rõ mã code)",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
              {
                component_type: "CAMERA",
                keyboard_type: "default",
                component_code: "question_7.2",
                show: false,
                type_id: 120,
                type_name: "Chụp hình tổng quan tủ lạnh",
                validate: {
                  required: true,
                  min: 1,
                  max: 5,
                },
                value: [],
              },
            ],
          },
        ],
        item_structure: {
          cooler_key: null,
          questionnaires: [
            {
              component_type: "SELECT",
              keyboard_type: "default",
              component_code: "question_4",
              show: true,
              label: "Kiểm tra hiện diện tủ",
              validate: {
                required: true,
              },
              default_value: null,
              value: null,
              options: [
                {
                  value: "key-co-tu",
                  label: "Có tủ",
                },
                {
                  value: "key-khong-co-tu",
                  label: "Không có tủ tại quán",
                },
                {
                  value: "key-tu-di-doi",
                  label: "Tủ đã di dời",
                },
              ],
              actions: {
                "key-co-tu": {
                  show: ["question_5", "question_5.1"],
                },
                "key-khong-co-tu": {
                  show: ["screenshot_call_history"],
                },
                "key-tu-di-doi": {
                  show: ["new_address"],
                },
              },
            },
            {
              component_type: "TEXTAREA",
              keyboard_type: "default",
              component_code: "field_note_cooler",
              show: true,
              label: "Nhập ghi chú (nếu có)",
              validate: {
                required: false,
              },
              default_value: null,
              value: null,
            },
            {
              component_type: "CAMERA",
              keyboard_type: "default",
              component_code: "screenshot_call_history",
              show: false,
              type_id: 114,
              type_name: "Gọi DCR/SS và chụp màn hình",
              validate: {
                required: true,
                min: 1,
                max: 5,
              },
              value: [],
            },
            {
              component_type: "TEXTAREA",
              keyboard_type: "default",
              component_code: "new_address",
              show: false,
              label: "Nhập địa chỉ di dời tủ",
              validate: {
                required: true,
              },
              default_value: null,
              value: null,
            },
            {
              component_type: "SELECT",
              keyboard_type: "default",
              component_code: "question_5",
              show: false,
              label: "Loại tủ",
              validate: {
                required: true,
              },
              default_value: null,
              value: null,
              options: [
                {
                  value: "key-fub",
                  label: "FUB",
                },
                {
                  value: "key-pmx",
                  label: "PMX",
                },
                {
                  value: "key-vc",
                  label: "VC",
                },
                {
                  value: "key-vm",
                  label: "VM",
                },
              ],
              actions: {},
            },
            {
              component_type: "SELECT",
              keyboard_type: "default",
              component_code: "question_5.1",
              show: false,
              label: "Loại mã tài sản của tủ",
              validate: {
                required: true,
              },
              default_value: null,
              value: null,
              options: [
                {
                  value: "key-qr",
                  label: "QR",
                },
                {
                  value: "key-inox",
                  label: "INOX",
                },
              ],
              actions: {
                "key-qr": {
                  show: [
                    "question_6",
                    "question_6.1",
                    "question_6.2",
                    "question_6.3",
                    "question_6.4",
                  ],
                },
                "key-inox": {
                  show: ["question_7", "question_7.1", "question_7.2"],
                },
              },
            },
            {
              component_type: "SCAN_QR",
              keyboard_type: "default",
              component_code: "question_6",
              show: false,
              type_id: 115,
              type_name: "Scan QR",
              validate: {
                required: false,
                min: 1,
                max: 1,
              },
              value: [],
            },
            {
              component_type: "TEXT",
              keyboard_type: "default",
              component_code: "question_6.1",
              show: false,
              label: "Nhập mã QR trên tủ",
              validate: {
                required: false,
              },
              default_value: null,
              value: null,
            },
            {
              component_type: "CAMERA",
              keyboard_type: "default",
              component_code: "question_6.2",
              show: false,
              type_id: 116,
              type_name: "Chụp hình QR bên ngoài tủ (thấy rõ mã code)",
              validate: {
                required: true,
                min: 1,
                max: 5,
              },
              value: [],
            },
            {
              component_type: "CAMERA",
              keyboard_type: "default",
              component_code: "question_6.3",
              show: false,
              type_id: 117,
              type_name: "Chụp hình QR bên trong tủ (thấy rõ mã code)",
              validate: {
                required: true,
                min: 1,
                max: 5,
              },
              value: [],
            },
            {
              component_type: "CAMERA",
              keyboard_type: "default",
              component_code: "question_6.4",
              show: false,
              type_id: 118,
              type_name: "Chụp hình tổng quan tủ lạnh",
              validate: {
                required: true,
                min: 1,
                max: 5,
              },
              value: [],
            },
            {
              component_type: "TEXT",
              keyboard_type: "default",
              component_code: "question_7",
              show: false,
              label: "Nhập mã inox trên tủ",
              validate: {
                required: false,
              },
              default_value: null,
              value: null,
            },
            {
              component_type: "CAMERA",
              keyboard_type: "default",
              component_code: "question_7.1",
              show: false,
              type_id: 119,
              type_name: "Chụp hình mã inox (thấy rõ mã code)",
              validate: {
                required: true,
                min: 1,
                max: 5,
              },
              value: [],
            },
            {
              component_type: "CAMERA",
              keyboard_type: "default",
              component_code: "question_7.2",
              show: false,
              type_id: 120,
              type_name: "Chụp hình tổng quan tủ lạnh",
              validate: {
                required: true,
                min: 1,
                max: 5,
              },
              value: [],
            },
          ],
        },
      },
      COOLER_EXTRA: {
        issue_name: "Cooler extra",
        issue_key: "COOLER_EXTRA",
        done: false,
        store_status: ["SUCCESS"],
        validate: {
          required: false,
        },
        items: [],
        item_structure: {
          cooler_key: null,
          questionnaires: [
            {
              component_type: "SELECT",
              keyboard_type: "default",
              component_code: "question_5",
              show: true,
              label: "Loại tủ",
              validate: {
                required: true,
              },
              default_value: null,
              value: null,
              options: [
                {
                  value: "key-fub",
                  label: "FUB",
                },
                {
                  value: "key-pmx",
                  label: "PMX",
                },
                {
                  value: "key-vc",
                  label: "VC",
                },
                {
                  value: "key-vm",
                  label: "VM",
                },
              ],
              actions: {},
            },
            {
              component_type: "SELECT",
              keyboard_type: "default",
              component_code: "question_5.1",
              show: true,
              label: "Loại mã tài sản của tủ",
              validate: {
                required: true,
              },
              default_value: null,
              value: null,
              options: [
                {
                  value: "key-qr",
                  label: "QR",
                },
                {
                  value: "key-inox",
                  label: "INOX",
                },
              ],
              actions: {
                "key-qr": {
                  show: [
                    "question_6",
                    "question_6.1",
                    "question_6.2",
                    "question_6.3",
                    "question_6.4",
                  ],
                },
                "key-inox": {
                  show: ["question_7", "question_7.1", "question_7.2"],
                },
              },
            },
            {
              component_type: "SCAN_QR",
              keyboard_type: "default",
              component_code: "question_6",
              show: false,
              type_id: 115,
              type_name: "Scan QR",
              validate: {
                required: false,
                min: 1,
                max: 1,
              },
              value: [],
            },
            {
              component_type: "TEXT",
              keyboard_type: "default",
              component_code: "question_6.1",
              show: false,
              label: "Nhập mã QR trên tủ",
              validate: {
                required: false,
              },
              default_value: null,
              value: null,
            },
            {
              component_type: "CAMERA",
              keyboard_type: "default",
              component_code: "question_6.2",
              show: false,
              type_id: 116,
              type_name: "Chụp hình QR bên ngoài tủ (thấy rõ mã code)",
              validate: {
                required: true,
                min: 1,
                max: 5,
              },
              value: [],
            },
            {
              component_type: "CAMERA",
              keyboard_type: "default",
              component_code: "question_6.3",
              show: false,
              type_id: 117,
              type_name: "Chụp hình QR bên trong tủ (thấy rõ mã code)",
              validate: {
                required: true,
                min: 1,
                max: 5,
              },
              value: [],
            },
            {
              component_type: "CAMERA",
              keyboard_type: "default",
              component_code: "question_6.4",
              show: false,
              type_id: 118,
              type_name: "Chụp hình tổng quan tủ lạnh",
              validate: {
                required: true,
                min: 1,
                max: 5,
              },
              value: [],
            },
            {
              component_type: "TEXT",
              keyboard_type: "default",
              component_code: "question_7",
              show: false,
              label: "Nhập mã inox trên tủ",
              validate: {
                required: false,
              },
              default_value: null,
              value: null,
            },
            {
              component_type: "CAMERA",
              keyboard_type: "default",
              component_code: "question_7.1",
              show: false,
              type_id: 119,
              type_name: "Chụp hình mã inox (thấy rõ mã code)",
              validate: {
                required: true,
                min: 1,
                max: 5,
              },
              value: [],
            },
            {
              component_type: "CAMERA",
              keyboard_type: "default",
              component_code: "question_7.2",
              show: false,
              type_id: 120,
              type_name: "Chụp hình tổng quan tủ lạnh",
              validate: {
                required: true,
                min: 1,
                max: 5,
              },
              value: [],
            },
          ],
        },
      },
      STORE_UPDATE: {
        issue_name: "Store update",
        issue_key: "STORE_UPDATE",
        done: false,
        validate: {
          required: false,
        },
        store_status: ["SUCCESS", "UNSUCCESS"],
        items: [
          {
            component_type: "TEXT",
            keyboard_type: "default",
            component_code: "store_banner_update",
            label: "Tên bảng hiệu",
            validate: {
              required: false,
            },
            default_value: null,
            value: null,
          },
          {
            component_type: "TEXT",
            keyboard_type: "default",
            component_code: "store_name_update",
            label: "Tên điểm bán mới",
            validate: {
              required: false,
            },
            default_value: null,
            value: null,
          },
          {
            component_type: "TEXT",
            keyboard_type: "default",
            component_code: "store_phone_update",
            label: "Số điện thoại mới",
            validate: {
              required: false,
            },
            default_value: null,
            value: null,
          },
          {
            component_type: "PROVINCE_SELECT",
            keyboard_type: "default",
            component_code: "store_province_update",
            label: "Tỉnh/Thành phố",
            validate: {
              required: false,
            },
            default_value: null,
            value: null,
            options: [],
          },
          {
            component_type: "DISTRICT_SELECT",
            keyboard_type: "default",
            component_code: "store_district_update",
            label: "Quận/Huyện",
            validate: {
              required: false,
            },
            default_value: null,
            value: null,
            options: [],
          },
          {
            component_type: "WARD_SELECT",
            keyboard_type: "default",
            component_code: "store_ward_update",
            label: "Phường/Xã",
            validate: {
              required: false,
            },
            default_value: null,
            value: null,
            options: [],
          },
          {
            component_type: "TEXT",
            keyboard_type: "default",
            component_code: "store_street_update",
            label: "Đường",
            validate: {
              required: false,
            },
            default_value: null,
            value: null,
          },
          {
            component_type: "TEXT",
            keyboard_type: "default",
            component_code: "store_addno_update",
            label: "Số nhà",
            validate: {
              required: false,
            },
            default_value: null,
            value: null,
          },
        ],
      },
      NOTE_UNSUCCESS: {
        issue_name: "Note Unsuccess",
        issue_key: "NOTE_UNSUCCESS",
        done: false,
        store_status: ["UNSUCCESS"],
        validate: {
          required: true,
        },
        items: [
          {
            component_type: "SELECT",
            keyboard_type: "default",
            component_code: "note_ktc",
            label: "Lý do Không thành công",
            validate: {
              required: true,
            },
            default_value: null,
            value: null,
            options: [
              {
                value: "key-diem-ban-khong-hop-tac",
                label: "Điểm bán không hợp tác",
              },
              {
                value: "key-diem-ban-thay-doi-loai-hinh-kinh-doanh",
                label: "Điểm bán thay đổi loại hình kinh doanh",
              },
              {
                value: "key-diem-ban-dong-cua",
                label: "Điểm bán đóng cửa",
              },
              {
                value: "key-diem-ban-khong-tim-thay",
                label: "Điểm bán không tìm thấy",
              },
              {
                value: "key-diem-ban-tam-dong-cua-do-dich-covid",
                label: "Điểm bán tạm đóng cửa do dịch covid",
              },
            ],
          },
        ],
      },
      CHECKOUT: {
        issue_name: "Check out",
        issue_key: "CHECKOUT",
        done: false,
        store_status: ["SUCCESS", "UNSUCCESS"],
        validate: {
          required: true,
        },
        value: {
          lat: null,
          lng: null,
        },
      },
    },
  },
};
