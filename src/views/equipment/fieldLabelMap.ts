const fieldLabelMap: Record<string, string> = {
    memberCardNumber: "会员卡号",
    cardType: "卡类型",
    issueDate: "开卡日期",
    holderName: "持有人姓名",//1严重 2紧急 3一般
    holderPhone: "持有人电话",
    cardBalance: "卡余额",//故障代码
    transactionRecords: "消费记录",//1待指派 2处理中 处理异常
    validUntil: "有效期至",//1待指派 2处理中 处理异常
}

const getLabel = (key: string): string => {
    return fieldLabelMap[key] || key
}

export { getLabel }