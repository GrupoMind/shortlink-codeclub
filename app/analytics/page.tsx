"use client";

import { useState } from "react";
import { ParallaxItem } from "@/components/page-transition";

// Mock data type
interface LinkAnalytics {
    id: string;
    shortUrl: string;
    originalUrl: string;
    totalClicks: number;
    clicks: {
        date: string;
        location: string;
    }[];
}

// Function to group clicks by location
const groupClicksByLocation = (
    clicks: { date: string; location: string }[],
) => {
    const grouped = clicks.reduce(
        (acc, click) => {
            if (!acc[click.location]) {
                acc[click.location] = {
                    count: 0,
                    dates: [],
                };
            }
            acc[click.location].count++;
            acc[click.location].dates.push(click.date);

            return acc;
        },
        {} as Record<string, { count: number; dates: string[] }>,
    );

    return Object.entries(grouped).map(([location, data]) => ({
        location,
        count: data.count,
        dates: data.dates,
    }));
};

// Mock data
const mockAnalytics: LinkAnalytics[] = [
    {
        id: "1",
        shortUrl: "shrt.ly/abc123",
        originalUrl: "https://example.com/very-long-url",
        totalClicks: 5,
        clicks: [
            { date: "2024-04-17 10:30:00", location: "New York, USA" },
            { date: "2024-04-17 11:45:00", location: "London, UK" },
            { date: "2024-04-17 14:20:00", location: "Tokyo, Japan" },
            { date: "2024-04-17 16:10:00", location: "London, UK" },
            { date: "2024-04-17 18:30:00", location: "Berlin, Germany" },
        ],
    },
    {
        id: "2",
        shortUrl: "shrt.ly/xyz789",
        originalUrl: "https://another-example.com/long-url",
        totalClicks: 3,
        clicks: [
            { date: "2024-04-17 09:15:00", location: "Paris, France" },
            { date: "2024-04-17 12:30:00", location: "Madrid, Spain" },
            { date: "2024-04-17 15:45:00", location: "Paris, France" },
        ],
    },
];

export default function AnalyticsPage() {
    const [selectedLink, setSelectedLink] = useState<LinkAnalytics | null>(null);
    const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <ParallaxItem index={0}>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-12">
                        Analytics Dashboard
                    </h1>
                </ParallaxItem>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Links List */}
                    <ParallaxItem index={1}>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                Your Shortened Links
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Short URL
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Original URL
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                Clicks
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                        {mockAnalytics.map((link) => (
                                            <tr
                                                key={link.id}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150"
                                                onClick={() => {
                                                    setSelectedLink(link);
                                                    setExpandedLocation(null);
                                                }}
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                                    {link.shortUrl}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 max-w-[200px] truncate">
                                                    {link.originalUrl}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                    {link.totalClicks}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ParallaxItem>

                    {/* Click Details */}
                    <ParallaxItem index={2}>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                {selectedLink
                                    ? `Click Details for ${selectedLink.shortUrl}`
                                    : "Select a link to view details"}
                            </h2>
                            {selectedLink ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                    Location
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                    Clicks
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                    Last Access
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                            {groupClicksByLocation(selectedLink.clicks).map(
                                                (group, index) => (
                                                    <>
                                                        <tr
                                                            key={index}
                                                            className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150"
                                                            onClick={() =>
                                                                setExpandedLocation(
                                                                    expandedLocation === group.location
                                                                        ? null
                                                                        : group.location,
                                                                )
                                                            }
                                                        >
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                                <div className="flex items-center">
                                                                    <span className="mr-2">{group.location}</span>
                                                                    {group.count > 1 && (
                                                                        <span className="text-xs text-gray-400">
                                                                            (click to expand)
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                                {group.count}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                                {new Date(
                                                                    Math.max(
                                                                        ...group.dates.map((date) =>
                                                                            new Date(date).getTime(),
                                                                        ),
                                                                    ),
                                                                ).toLocaleString()}
                                                            </td>
                                                        </tr>
                                                        {expandedLocation === group.location &&
                                                            group.count > 1 && (
                                                                <tr className="bg-gray-50 dark:bg-gray-700">
                                                                    <td className="px-6 py-4" colSpan={3}>
                                                                        <div className="ml-4">
                                                                            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                                                                Individual Clicks:
                                                                            </h3>
                                                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                                                                                            Date
                                                                                        </th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    {group.dates.map((date, dateIndex) => (
                                                                                        <tr key={dateIndex}>
                                                                                            <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                                                                                                {new Date(date).toLocaleString()}
                                                                                            </td>
                                                                                        </tr>
                                                                                    ))}
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )}
                                                    </>
                                                ),
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                                    Select a link from the table to view its click details
                                </p>
                            )}
                        </div>
                    </ParallaxItem>
                </div>
            </div>
        </div>
    );
}
