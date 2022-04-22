# AWS ROLE PERMISSIONS

{
"Version": "2012-10-17",
"Statement": [
{
"Sid": "VisualEditor0",
"Effect": "Allow",
"Action": [
"lambda:CreateFunction",
"lambda:ListVersionsByFunction",
"iam:CreateRole",
"cloudformation:DescribeStackResource",
"iam:PutRolePolicy",
"cloudformation:CreateChangeSet",
"cloudformation:DeleteChangeSet",
"iam:PassRole",
"cloudformation:DescribeStackEvents",
"cloudformation:DescribeChangeSet",
"cloudformation:ExecuteChangeSet",
"cloudformation:ListStackResources",
"iam:GetRole",
"apigateway:*",
"s3:*",
"lambda:GetFunction",
"logs:CreateLogGroup",
"cloudformation:DescribeStacks",
"lambda:UpdateFunctionCode",
"lambda:AddPermission",
"cloudformation:GetResource",
"cloudformation:GetTemplate",
"lambda:PublishVersion",
"apigateway:POST",
"cloudformation:ValidateTemplate"
],
"Resource": "\*"
}
]
}
