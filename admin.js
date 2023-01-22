require('dotenv').config()
const admin = require('firebase-admin');


const type = "service_account"
const project_id = "tiered-bad-bank"
const private_key_id = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQChNyI/0UnkO4It\n0pFpehGjqI8+PEZ2YdQDE7sLbWYMtv7dpT9HGZmwVCw5pjc/mgwV8lNTcW7w3FIX\nLfrbY9RAwAHmyu2EB3n5n/jVUeWnrMgr1zstG7TtpMQhfXXjn9qKS0mhDhQRjrJ7\nGs/w6eY7UOt6jVzQH6Uwd1GQrsli4A6AD/UHNDCSA+5YIMKP8oHTQF2wHa0XpqI2\n/0aPmH7F0+bxOgmwKbT2XpFMgohFjcRZhZGLHPtxnzP3vvstCb0ZjSsU9RijkfvG\n7vlcqN+X22W6do+vq1G4H5jnJ4wVy0wXlrKjQ4PW9CdZeyPKlNnlSJqrDZl4EGI0\njJE4cqeLAgMBAAECggEAK1/akqH8B/Bs02hKYD8L/OTOeVedO5+Re6x00BvEb5pS\nkw6xKi98lqDm7zHFvpJzOvpiKdqklyAn4/2mdx1yT2N5f39MjQ+35Q4B1F7+83B8\nwLLdRIMmWCPS8xG+xJnPIhMkgbT4eErUwWNS3AYKQB5C5Mug04wYFSSdKNil7The\nzM4mTLRevHIA382X/ifB8yfEuDr5Z2jB477EYDVJCAv8le7HBwqe4B796Wle4Fpr\n02znuQxbX6llUCJsJTfcOlqc/kJ3vajknRqDnrmJcPtVoiqDJYTDy+UBk+LVkBjA\nT9a1gRliOkzG9wuQL9GjaRpBhsbKN90WA9kBwlZ74QKBgQDMS7WYKSnAEDlXIdcF\n6VCnfixhMmNnOnSirFGhyWayFVyoh20f7kaxSvmeWG0+M14ccv12kUsXyU7qKMiz\n4N7q5OC6k4fpvRc31omgx4sIkax57Nu+us0/AiDsjdRWDOSpesqwtzeiIa8ldema\nis61P4Cyw+iYPKkOsK2SauuQYQKBgQDKBEDhinRYumdBuMoR91K/GpgDbll9WyKL\nyNZsvWax3H5KagNQp1R8auWtmWrZzWgyNRTY0oRJy74SSA0mCIR/DesaqnqBCaYm\nf7jaoTkLo7MGStrgDjJQHX5sVnkxTX1coZ3mCNaoqWLPcHFHk2OwW2RmhQBNP9s+\nroxeQCuvawKBgERW8ykyY9/2zWejT02P7cYJxAjDlVL7z/Z21Fvdhnf+A1/w5YUv\n7P/zx6q7g9ex0UKNCNK36bnMQpS8Dd92Urua0r43Cdkbwv+Pybw54/161Yp3vE6C\nKJRyPtdC3ovmhjtXcyRINdkLkY5jckCbPGiPFJs4Q79hU2Axo+59y80hAoGAMV2u\nuS7LVa9fcjkE8DT+/II0KYp6xd5SZ9RRSctS4B3gorCbVMc/JxQ8QhreeJDwaGx+\nRqnS9/GY5gDDbcrhDedJz39fZk8EUh4d/xcsyIJdSilaqSvu8ZLzhOfwv7KO8ubv\nnfoE8rxJ0CVLGVGUJ9F9jGvt8fKr0fp3hMSrqDcCgYAldrlrWD4JoT0anAeX6CfQ\nwebtC7S4uiZShGbDuQtZHdJ+XVxXz2wZFA0t9Ijh7QiUEf23dWT8OG+k5X5KJu4i\nEiCHe470RomKb8Rw1F9gziO5wE8GDD3lLY4TB48U4W1Mo+aJEdlrPZ/3PH94P2MC\n+oycnIU1706U0s8VoBY3Og==\n-----END PRIVATE KEY-----\n"
const private_key = "86125cb91da7cb0016d229c4d3e98f07625c77cd"
const client_email = "firebase-adminsdk-b90zs@tiered-bad-bank.iam.gserviceaccount.com"
const client_id = "106016125547918917843"
const auth_uri = "https://accounts.google.com/o/oauth2/auth"
const token_uri = "https://oauth2.googleapis.com/token"
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs"
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b90zs%40tiered-bad-bank.iam.gserviceaccount.com"

admin.initializeApp({
    credential: admin.credential.cert({
        type,
        project_id,
        private_key_id,
        private_key:
          private_key.replace(/\\n/g,'\n'),
        client_email,
        client_id,
        auth_uri,
        token_uri,
        auth_provider_x509_cert_url,
        client_x509_cert_url
    }),
  });
  
  // export that admin
  module.exports = admin;