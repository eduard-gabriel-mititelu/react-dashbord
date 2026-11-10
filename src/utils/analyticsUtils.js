import { orders } from "../data/dashboardData";

export function toTimestamp(date, isEndDate = false) {
    return new Date(
        date.year,
        date.month - 1,
        date.day,
        date.hour ?? (isEndDate ? 23 : 0),
        date.minute ?? (isEndDate ? 59 : 0)
    ).getTime();
}

export function filterOrdersByDate(orders, startDate, endDate) {
    const start = toTimestamp(startDate);
    const end = toTimestamp(endDate, true);

    return orders.filter(order => {
        const orderTime = toTimestamp(order.date);
        return orderTime >= start && orderTime <= end;
    });
}

export function calculateRevenue(orders) {
    return orders.reduce((total, order) => {
        if (order.status != "Completed") return total;
        return total + order.amount;
    }, 0);
}

export function countOrders(orders) {
    return orders.length;
}

export function getOrdersByStatus(orders) {
    return orders.reduce((result, order) => {
        result[order.status] = (result[order.status] || 0) + 1;

        return result;
    }, {})
}

export function GetPercentages(orders) {
    const statusOrders = getOrdersByStatus(orders);
    const totalOrders = countOrders(orders);

    return Object.entries(statusOrders).map(([status, count]) => ({
        status,
        count,
        percentage: totalOrders === 0 ? 0 : (count / totalOrders) * 100
    }))
}

export function getDateKey(date) {
    return `${date.year}-${date.month}-${date.day}`
}

export function groupOrdersByDay(orders) {
    const groupedData = orders.reduce((result, order) => {
        const dateKey = getDateKey(order.date);

        if (!result[dateKey]) {
            result[dateKey] = {
                date: dateKey,
                orders: 0,
                revenue: 0
            };
        }

        result[dateKey].orders += 1;

        if (order.status === "Completed") {
            result[dateKey].revenue += order.amount;
        }

        return result;
    }, {});

    return Object.values(groupedData);
}

export function getDaysBetween(startDate, endDate) {
    const days=[];

    const currentDate = new Date(
        startDate.year,
        startDate.month + 1,
        startDate.day
    );

    const lastDate = new Date(
        endDate.year,
        endDate.month + 1,
        endDate.day
    );

    while (currentDate <= lastDate) {
        days.push({
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() - 1,
            day: currentDate.getDate()
        })
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
}

export function fillMissingDays(dailyData, startDate, endDate) {
    const allDays = getDaysBetween(startDate, endDate);

    return allDays.map((day) => {
        const dateKey = getDateKey(day);
        const  existingDay = dailyData.find ((item) => item.date === dateKey)

        return existingDay || {
            date: dateKey,
            orders: 0,
            revenue: 0
        }
    })
}

export function getAnalyticsSummary(orders) {
    const totalOrders = countOrders(orders);
    const totalRevenue = calculateRevenue(orders);
    const statusCounts = getOrdersByStatus(orders);
    const completedOrders = statusCounts.Completed || 0;
    const pendingOrders = statusCounts.Pending || 0;
    const cancelledOrders = statusCounts.Cancelled || 0;
    const averageOrderValue = completedOrders === 0
        ? 0
        : totalRevenue / completedOrders;
    return {
        totalOrders,
        totalRevenue,
        completedOrders,
        pendingOrders,
        cancelledOrders,
        averageOrderValue
    };
}